import os
import pandas as pd
import psycopg2
from psycopg2 import extras

conn_string = "dbname='laravel_db' user='laravel_user' password='secret' host='localhost' port='5432'"

def create_tables_from_csv(csv_file, table_name):
    try:
        csv_file_path = os.path.join(os.path.dirname(__file__), csv_file)

        df = pd.read_csv(csv_file_path, nrows=1)

        df.columns = df.columns.str.replace(' ', '_')
        df.columns = df.columns.str.lower()
        df.columns = df.columns.str.replace(r'[^\w]', '', regex=True)

        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        create_table_query = f"CREATE TABLE IF NOT EXISTS {table_name} ("
        create_table_query += ", ".join(f"{col} TEXT" for col in df.columns)
        create_table_query += ");"

        cursor.execute(create_table_query)
        conn.commit()

        print(f"Tabela {table_name} criada com sucesso no PostgreSQL!")

        cursor.close()
        conn.close()

    except (Exception, psycopg2.Error) as error:
        print(f"Erro ao criar tabela {table_name} no PostgreSQL: {error}")

def insert_data_from_csv(csv_file, table_name):
    try:
        csv_file_path = os.path.join(os.path.dirname(__file__), csv_file)

        conn = psycopg2.connect(conn_string)
        cursor = conn.cursor()

        df = pd.read_csv(csv_file_path)

        df.columns = df.columns.str.replace(' ', '_')
        df.columns = df.columns.str.lower()
        df.columns = df.columns.str.replace(r'[^\w]', '', regex=True)

        columns = ','.join(df.columns)
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
    create_tables_from_csv(csv_file, table_name)

try:
    laravel_project_path = "../"

    os.system(f"php {laravel_project_path}/artisan migrate")

    print("Migrações do Laravel executadas com sucesso!")

except Exception as error:
    print(f"Erro ao executar as migrações do Laravel: {error}")

for csv_file, table_name in csv_files:
    insert_data_from_csv(csv_file, table_name)
