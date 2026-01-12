# 💰 Calculadora de Propinas

Una aplicación web interactiva para calcular propinas según la calidad del servicio, dividir la cuenta entre varias personas y mantener un historial de todos tus cálculos.


## 📋 Descripción

Simulador de Propinas es una herramienta práctica y fácil de usar que te ayuda a calcular la propina adecuada en restaurantes basándose en la calidad del servicio recibido. La aplicación permite dividir el total entre varias personas y guarda un historial completo de todos tus cálculos.

## ✨ Características

- 🧮 **Cálculo automático de propinas** según 4 niveles de calidad de servicio
- 👥 **División equitativa** entre múltiples personas
- 📊 **Resultados detallados**: muestra propina, total, y montos por persona
- 💾 **Historial persistente** de cálculos guardado en localStorage
- 🎨 **Interfaz moderna y responsive** con diseño gradient
- ✅ **Validación de datos** en tiempo real
- 🗑️ **Gestión de historial** con opción de limpiar registros

## 🎯 Niveles de Propina

| Calidad | Porcentaje |
|---------|-----------|
| Excelente | 20% |
| Bueno | 15% |
| Regular | 10% |
| Malo | 5% |

## 🚀 Demo

Puedes ver el proyecto en vivo aquí: [Calculadora de Propinas](https://github.com/jechenique22/Calculador-de-Propinas-2-)

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con gradientes y animaciones
- **JavaScript Vanilla**: Lógica de la aplicación sin dependencias
- **LocalStorage API**: Persistencia de datos

## 📦 Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/jechenique22/Calculador-de-Propinas-2-.git
```

2. Navega al directorio del proyecto:
```bash
cd Calculador-de-Propinas-2-
```

3. Abre `index.html` en tu navegador favorito

¡No requiere instalación de dependencias ni servidor!

## 🎮 Uso

1. **Ingresa el monto de la cuenta** en el campo correspondiente
2. **Selecciona la calidad del servicio** del menú desplegable
3. **Indica el número de personas** que dividirán la cuenta
4. **Haz clic en "Calcular Propina"**
5. Visualiza los resultados:
   - Monto de la propina
   - Total a pagar
   - Propina por persona
   - Total por persona
6. Revisa el **historial** de cálculos anteriores
7. Usa el botón **"Limpiar Historial"** cuando lo necesites

## 📁 Estructura del Proyecto

```
calculador-de-propinas/
│
├── index.html          # Estructura HTML principal
├── style.css           # Estilos y diseño
├── main.js             # Lógica de la aplicación
└── README.md           # Documentación
```

## 🔧 Funcionalidades Principales

### Validación de Entradas
```javascript
- Montos mayores a 0
- Número de personas válido (mínimo 1)
- Mensajes de error descriptivos
```

### Almacenamiento Local
```javascript
- Guarda historial automáticamente
- Recupera datos al recargar la página
- Formato JSON para fácil manipulación
```

### Cálculos Precisos
```javascript
- Propina basada en porcentaje según calidad
- División exacta entre personas
- Formato de moneda argentino ($)
```

## 🎨 Capturas de Pantalla

*La aplicación cuenta con un diseño moderno con gradiente púrpura y tarjetas blancas para una experiencia visual agradable.*

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Mejoras Futuras

- [ ] Agregar más opciones de porcentajes personalizados
- [ ] Exportar historial a CSV/PDF
- [ ] Soporte para múltiples monedas
- [ ] Modo oscuro/claro
- [ ] Gráficos estadísticos del historial
- [ ] PWA (Progressive Web App)

## 👤 Autor

**Javier Echenique**

- GitHub: [@jechenique22](https://github.com/jechenique22)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- Diseño inspirado en tendencias modernas de UI/UX
- Iconos emoji para una interfaz amigable
- Comunidad de desarrolladores por las buenas prácticas

---

⭐ Si te gustó este proyecto, ¡dale una estrella en GitHub!

**© 2026 Echenique Javier - Todos los derechos reservados**
