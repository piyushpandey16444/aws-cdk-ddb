def lambda_handler(event, context):
    return {
        "status_code": 200,
        "data": "Coming from Lambda..."
    }


if __name__ == "__main__":
    print(lambda_handler(None, None))
