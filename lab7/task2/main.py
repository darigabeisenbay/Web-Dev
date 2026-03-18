from models import Car, Motorcycle


def main():
    my_car = Car("Tesla", "Model 3", 2023, "электричестве")
    my_bike = Motorcycle("Harley", "Iron 883", 2021, False)

    vehicles = [my_car, my_bike]

    print("--- Информация о транспорте ---")
    for v in vehicles:
        print(v)
        print(v.get_info())

        print(v.start_engine())
        print("-" * 20)

    print(my_bike.wheelie())


if __name__ == "__main__":
    main()