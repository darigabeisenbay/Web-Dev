
class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"Двигатель {self.brand} заведен."

    def get_info(self):
        return f"{self.year} {self.brand} {self.model}"

    def __str__(self):
        return f"Транспорт: {self.brand} {self.model}"

class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def start_engine(self):
        return f"Машина {self.brand} тихо заводится на {self.fuel_type}."

class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar=False):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def wheelie(self):
        return "Мотоцикл едет на заднем колесе!"

    def start_engine(self):
        return f"Мотоцикл {self.brand} громко ревет!"