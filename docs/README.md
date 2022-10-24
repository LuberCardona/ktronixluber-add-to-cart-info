# add-to-cart-info

Add to cart info es un componente que mostrará un modal con el resumen de los productos al momento de agregar un producto al carrito de compras.

## Vista en escritorio
![addToCartInfo-Desktop](https://user-images.githubusercontent.com/66228518/197618207-054c358c-29cb-40bc-9ed7-0a2c64ccbe40.JPG)

## Vista en móviles
![addToCartInfo-Mobile](https://user-images.githubusercontent.com/66228518/197618260-52b02c35-8104-474d-abe1-8f6b89f10d36.JPG)

## Configuración

### Paso 1 - Configuración Básica
Ingresar al siguiente repositorio en GitHub [react-app-template](https://github.com/vtex-apps/react-app-template) y crear un nuevo repositorio usando este template

### Paso 2 - Clonación del repositorio
Abrir la terminal e ingresar el comando git clone mas la URL del repositorio en gitHub así:  
git clone [url](), posteriormente acceda a la carpeta del proyecto en su repositorio local.

### Paso 3 - Editar el Manifest.json
Modificar en el archivo manifest.json el valor del vendor con el nombre correspondiente a su vendor y el valor del name con el nombre con el que va a usar su componente. Opcionalmente puede modificar la versión, el título y agregar una descripción.

Ejemplo:  
{  
  "vendor": "itgloberspartnercl",  
  "name": "add-to-cart-info",  
  "version": "0.0.1",  
  "title": "Add to cart info",  
  "description": "Componente que mostrará información al momento de agregar un producto al carrito de compras"  
}

Adicionalmente debe asegurarse de tener en los builders el store en su version 0.x así:

"builders":{   
"store": "0.x"   
} 

### Paso 4 - Editar el Package.json
Modificar en los archivos package.json ubicado de manera global asi como el que esta ubicado en la carpeta de react, el nombre y la versión de igual forma como fueron modificados en el archivo manifest.json

Ejemplo:  
{    
  "version": "0.0.1",  
  "name": "add-to-cart-info"  
}

### Paso 5 - Instalar apps necesarias
En la terminal ubicarse en la carpeta react con el comando cd react y luego de estar allí digitar en la terminal la palabra yarn, con esto se hará la instalación de los modulos de node necesarios para su aplicación. Cierre su editor y abra nuevamente su proyecto y verifique que dentro de la carpeta de react haya quedado instalada la carpeta de node_modules.

### Paso 6 - Ejecute un preview de la tienda
En su terminal digite el comando vtex link, si su aplicación es lanzada sin ningún error, en su ternimal aparecerá la siguiente información:   
(info: App linked successfully). 

Para usar la aplicación en su tienda debe adicionar en el archivo manifest.json la dependencia correspondiente al componente.

Ejemplo:  
"dependencies": {  
 "itgloberspartnercl.add-to-cart-info": "0.x"  
}

Luego podrá renderizar el componente en su tienda donde lo requiera.

## Dependencies
1. "vtex.checkout-resources": "0.x"
2. "vtex.order-manager": "0.x"
3. "vtex.product-context": "0.x"
4. "vtex.css-handles": "0.x" 

## Store Component Apps  
Ninguna

## Custom Apps  
Ninguna

## Contributors
1. Luber María Cardona Vargas

