
# -*- coding: utf-8 -*-
"""
Script sorpresa para María 🎂
- Muestra un poema y una cuenta regresiva al cumpleaños.
Uso:
  1) Cambiá TARGET_DATE con la fecha del cumpleaños (YYYY-MM-DD).
  2) Ejecutá: python cuenta_regresiva.py
"""
from __future__ import print_function
from datetime import datetime, date

# >>>>> Editá esta fecha <<<<<
TARGET_DATE = "2025-09-28"  # ejemplo: '2025-12-31'

def dias_hasta(fecha_str):
    y,m,d = map(int, fecha_str.split('-'))
    objetivo = date(y,m,d)
    hoy = date.today()
    delta = (objetivo - hoy).days
    return delta

poema = u"""
María, mi amor,
hoy celebro tu vida
y todo lo que somos.
Gracias por cada risa,
cada abrazo,
cada plan que soñamos juntos.
Te amo.
"""

if __name__ == "__main__":
    try:
        d = dias_hasta(TARGET_DATE)
        print(u"\n🎉 Cuenta regresiva para el cumpleaños de María: {} día(s)".format(d))
    except Exception as e:
        print("No pude calcular la cuenta regresiva, revisá TARGET_DATE.", e)
    print("\n" + poema)
