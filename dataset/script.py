import os
import pandas as pd
import psycopg2
from psycopg2 import extras

conn_string = "dbname='laravel_db' user='laravel_user' password='secret' host='localhost' port='5432'"

def insert_data_from_csv(csv_file, table_name):
    try:
        csv_file_path = os.path.join(os.path.dirname(__file__), csv_file)

        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        df = pd.read_csv(csv_file_path)

        df_columns = list(df.columns)
        columns = ','.join(df_columns)
        values = [tuple(row) for row in df.to_numpy()]

        insert_query = f"INSERT INTO {table_name} ({columns}) VALUES %s"

        extras.execute_values(cursor, insert_query, values)

        conn.commit()
        cursor.close()
        conn.close()

        print(f"Dados inseridos na tabela {table_name} com sucesso!")

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao inserir dados na tabela {table_name}: {error}")

csv_files = [
    ("customer_details.csv", "customers"),
    ("E-commerece sales data 2024.csv", "sales"),
    ("product_details.csv", "products")
]

for csv_file, table_name in csv_files:
    insert_data_from_csv(csv_file, table_name)
