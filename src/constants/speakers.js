// import Vanessa from '../components/images/speaker_1'
import Mayra from '../components/images/speaker_2'
import Alejandro from '../components/images/speaker_3'
import Colin from '../components/images/speaker_4'
import Adrian from '../components/images/speaker_5'
import Melina from '../components/images/speaker_6'
import Santiago from '../components/images/speaker_7'
import Lucas from '../components/images/speaker_8'
import Maris from '../components/images/speaker_9'
import Sergio from '../components/images/speaker_10'
import Daniel from '../components/images/speaker_11'
import Anton from '../components/images/speaker_12'
import Jennifer from '../components/images/speaker_13'
import Irina from '../components/images/speaker_14'
import Kate from '../components/images/speaker_15'
import Luis_villalobos from '../components/images/speaker_16'
import Luis_vega from '../components/images/speaker_17'

export const speakers = {
  sergio:{
    name:'Sergio Quintero M.',
    figure: Sergio,
    talkName:'Firewall del lado del cliente; controlado por el host',
    description:'Nuevas técnicas de hacking a través de inyección de código en recursos javascript que permiten obtener datos como tarjetas de crédito, contraseñas y demás información importante para el cliente según el contexto. \r\n\r\n¿Qué medidas de seguridad tomar a la hora de proteger los datos del lado del cliente?\r\n\r\nMuchas veces la información llega a terceros maliciosos primero antes de llegar al host, recordemos el caso de los 380.000 usuarios afectados por ataque reciente a la British Airways, explicare como se realizo este ataque y veremos algunas formas de protegernos como usar formularios de terceros, escuchar todas las conexiones salientes del navegador por medio de javascript; tanto las xhr como fetch, cómo usar iframes para aumentar la seguridad en conexiones salientes. se mencionaran brevemente algunas herramientas de codigo abierto como xhook.'
  },
  luis_alejandro:{
    name:'Luis Alejandro Vega',
    figure: Luis_vega,
    talkName:'Mascot Driven Development: building a high performing team through application ownership & identity',
    description:'Two years ago I was challenged to change my job as a Senior Software Engineer and create a brand new team from the ground up. The task was to recruit and lead a team to own, revamp, and create applications for Bloombergs JavaScript Framework, a framework that 3,000 engineers rely on every day. The goal was to develop internal tools with the same effort, research and UX design principles that are used to create Bloombergs client-facing financial tools. At the time, few internal tools existed and the ones that did were vastly unpopular with most engineers, including myself.\r\n\r\nIn this talk, I will share my experience of changing roles from a senior software engineer to a managerial position. The path for building a team to own and revamp unpopular applications and expand the portfolio with new applications. The establishment of a team culture that emphasizes product ownership, unparalleled customer support, and the branding of each application with a mascot. I will talk about how this helped us build a strong and high-performance 10-person team that today proudly owns a wide-ranging family of JavaScript/Typescript Applications and leads innovation at Bloomberg and in JavaScript.'
  },
  mayra:{
    name:'Mayra Alejandra Rodriguez Maldonado',
    figure:Mayra,
    talkName:'Como crear tu store personalizado con  RxJS',
    description:'Con frecuencia usamos la administración de una store con NgRx en Angular, pero como todas las bibliotecas, a veces necesitamos diferentes comportamientos o quizás algo más complejo o tal vez algo más simple, y por supuesto, quizás algo más liviano. Si tu eres el tipo de desarrollador a quien le gustan las mejores prácticas, si le gusta tener en tu proyecto solo lo que necesitas y te encanta crear tupropio código personalizado, estaré encantada de mostrarte todo lo que necesitas saber para crear tu propio store con RxJs.',
  },
  irina:{
    name:'Irina Shestak',
    figure:Irina,
    talkName:'From Electron, to WASM, to Rust (aaand back to Electron)',
    description:'So you heard you can run WebAssembly in the browser, but what does this look like IRL? Seeking the much talked about performance benefits of running WASM in the browser, Compass (GUI for MongoDB) took the great leap forward and rewrote part of the application -- a schema parser responsible for document analysis -- in Rust. As it turns out, the rumours are true, I repeat the rumours are true: offloading parts of your application to Rust makes it fast, and in some of our cases, heaps fast.\r\n\r\nIn this talk I will cover converting a part of an codebase from JavaScript to Rust, bringing it to Electron, adding WASM to an existing React app, and deploying this whole lot to production. As Compass still talks to MongoDB via Node.js, I will also cover how we used Rust to improve performance without losing data integrity. This talk is about a success story, but also about a bunch of smol mishaps, fun woopses and lil dead ends we encountered and how we managed to overcome along the way.'
  },
  melina:{
    name:'Melina Mejía Bedoya',
    figure:Melina,
    talkName:'Transformando la web en un mejor lugar para todos',
    description:'La web es un lugar al que todos deberíamos poder acceder, sin importar cuáles son nuestras condiciones o limitaciones, todos deberíamos poder beneficiarnos de la información y conocimiento que en esta se encuentra.\r\n\r\n- En esta charla hablaré de cómo a través de JavaScript podemos crear páginas web accesibles:\r\n- Haré una pequeña introducción de  “Web Accessibility”\r\n- Explicaré cuáles son las 4 categorías de Accesibilidad, en esta charla me enfocaré en la visual\r\n- Expondré la importancia de que todas las páginas web sean accesibles \r\n- Daré un pequeño ejemplo de cómo construir un formulario con validación de campos teniendo en cuenta los principales conceptos de accesibilidad \r\n- Mostraré cómo probar la accesibilidad de una página web a través de una librería llamada ‘tota11y’\r\n- Mostraré un demo de cómo una persona con limitaciones visuales navegaría por una página web accesible\r\n- Presentaré las conclusiones y recursos disponibles\r\n'
  },
  santiago:{
    name:'Santiago Zapata',
    figure:Santiago,
    talkName:'Procedural Generation using JavaScript',
    description:'In this talk, I describe a process to design and implement procedural generators using a top-down approach resulting on a stack of generators of an increasingly higher level of detail, leveraging on JavaScript dynamic typing features to build a flexible communication protocol between them. I will use one of my generators as an example. http://slashie.net/ultimacastlegen/'
  },
  anton:{
    name:'Anton McConville',
    figure:Anton,
    talkName:'Personality hacking: using Node, WebAudio and Houdini to visualize psychology of song lyrics',
    description:'In this session we use JS on the server, and in the browser to visualize personality changes of musical artists over time, through their lyrics. \r\n\r\nOn the server we use Node to interface with Natural Language Processing APIs. On the client we use WebAudio to explore the dimensions of sound, and experiment with Houdini to play with visualizations. \r\n\r\nThe session steps through the open source code, analyzes the outcomes, and considers real world applications for the concepts.'
  },
  lucas:{
    name:'Lucas Aragno',
    figure:Lucas,
    talkName:'Neural networks on JavaScript',
    description:'Machine learning is so hot right now! in this talk ill introduce you to neural networks and how we can use them on our day to day stack'
  },
  jennifer:{
    name:'Jennifer Wong',
    figure:Jennifer,
    talkName:'Time Is But an Illusion… in JavaScript',
    description:'Time in JavaScript is weird. But why is time so terrible in JavaScript? Why do we need libraries like Moment.js? And what exactly are Greenwich Mean Time and Coordinated Universal Time.\r\n\r\nWith so much to worry about timing wise: formatting, time zones, internationalization, recurrence rules, leap years, daylight savings time, and more, everyone needs HELP!\r\n\r\nLet’s turn time into money by taking a look at the most popular time libraries and how we use them to solve JavaScript’s time problems. We’ll look at how JavaScript’s Date object started and what its prototype allows. We’ll wind our way through dates, times, and standards to find solutions to the weirdness.\r\n\r\nLet’s kill time together talking about JavaScript time! Because we know, time heals all.'
  },
  kate:{
    name:'Kate Beard',
    figure:Kate,
    talkName:'Learn How to Play the Theremin* Today, Guaranteed! (*no theremin required)',
    description:'Ever wanted to learn how to play the theremin, but werent sure about having a spooky-sounding, weird-looking antenna in your home? Dont even know what a theremin is? Luckily, I can solve both these problems for you!\r\n\r\nI ll show you how to turn any computer into a theremin using a browser, your webcam, and some machine learning magic; basic theremin-playing techniques; expound as much as possible about how cool theremins are; and maybe even subject you to a light bit of musical performance!\r\n\r\nFollow me on a journey of joy, frustration, and weird, haunting noises.'
  },
  alejandro:{
    name:'Alejandro Oviedo',
    figure:Alejandro,
    talkName:'A codex for the web',
    description:'Historical data has been proved fundamental to understand a vast variety of topics from physics to geography and astronomy. I believe that to better understand how we used the web, how we’re using it now and how can it be used tomorrow we can look at historical points strategically collected. In this talk I want to share how I built this library that collects data from the internet using serverless and Node.js.'
  },
  maris:{
    name:'Maris Botero Gonzalez',
    figure:Maris,
    talkName:'The time machine with machine learning and javascript',
    description:'A quick talk about a city project called the time machine, where I collected old photos of Medellin, documents to make machine learning algorithms using javascript and tensorflow.js.\r\nThe time machine is not a physical artifact properly, but it does situate us beyond this time to understand the cultural and historical processes of the territory. It allows us to expand our memory and understand the transformation of the community. In light of this reconstructed past, the future will be enriched by new tones. \r\nthis project was created with javascript and I was able to explore creationist algorithms and also share it with the children of my community.\r\n'
  },
  adrian:{
    name:'Adrián Bolonio',
    figure:Adrian,
    talkName:'Testing Web Accessibility',
    description:'When we develop a new web application, we often put a lot of work on the design, on making it beautiful and usable. In other words, we want our web app to be effective, efficient, and satisfying for the user. But a lot of times we don’t think about the user experience for people with disabilities, including people with age-related impairments.\r\n\r\nWeb accessibility (a11y ) means that people with disabilities can perceive, understand, navigate, and interact with websites and tools, and that they can contribute equally without barriers.” (Source: W3C - Web Accessibility Initiative). Our role as frontend and web developers is to create clear interfaces to make people understand and care about data, independently of their disabilities or impairments, but what we, developers, often forget is to ensure that the code we write follows the Web Content Accessibility Guidelines (WCAG), and the only way to achieve that is testing, either manual or automated.\r\n\r\nAutomated web a11y tests can free up our QA team from manual testing every part of our application, but, they can’t automatically make our site accessible. We should use automated a11y tests as one step of a larger testing process.'
  },
  daniel:{
    name:'Daniel Estiven Rico Posada',
    figure:Daniel,
    talkName:'Nodejs en tiempos de kubernetes',
    description:'Las prácticas de diseño y desarrollo de software se han ido transformando con el tiempo. Hace algunos años las capacidades que se asignaban a los servidores que ejecutan las aplicaciones eran estáticas; se estimaban las necesidades de infraestructura y cualquier tipo de escalamiento se realizaba de manera vertical (agregando más ram, disco, etc).\r\n\r\nCon la llegada de la nube y de tecnologías como Kubernetes, se hace necesario replantearnos la forma en que estamos construyendo las aplicaciones; desde los planteamientos de escalabilidad hasta la arquitectura aplicativa y el aprovechamiento de la infraestructura. \r\n\r\nMi objetivo en esta conferencia es contar algunas de las técnicas, prácticas y tecnologías con las que nos estamos soñando la nueva generación de aplicaciones en Bancolombia y que también nos han facilitado este proceso de transformación (on-premise / cloud). La idea es acortar el camino de quienes se encuentren abordando estos mismos retos. \r\n\r\nEstas técnicas, prácticas y tecnologías corresponden a : \r\n\r\n\r\n1. De los monolitos  a los microservicios\r\nDomain Driven Design es una técnica que se utiliza para realizar una separación de las aplicaciones con base en un criterio de contextos delimitados. La idea es modelar basados en el dominio, manteniendo aislada la lógica de negocio de los componentes tecnológicos. \r\n\r\nPresentaré la forma en que puede utilizarse event storming y domain driven design para decidir cuántos microservicios debes construir según la complejidad del dominio. Hablaré de la forma en que debes diseñar agregados para tener mejor aprovechamiento de las capacidades cloud y de los criterios que debes tener en cuenta para crear más o menos unidades desplegables (Ejemplo: la tasa de cambio como criterio para llevar monolitos modularizados a diferentes unidades desplegables). \r\n\r\n\r\n2. Clean Architecture (Package by layer, Package by component)\r\nEn esta fase mostraré cómo los planteamientos de la sección anterior se ven reflejados en la arquitectura de las aplicaciones NodeJS, desde dos aproximaciones:\r\npackage by component y package by layer. \r\n\r\nLa primera aproximación con una orientación más reactiva y de sistemas distribuidos, y la segunda, pensando en una sola unidad desplegable bien estructurada, con un aprovechamiento de principios como inversión e inyección de dependencias. \r\n\r\nEl planteamiento principal es tener bajo acoplamiento con una lógica de negocio (dominio) aislada, en donde los componentes tecnológicos sean intercambiables, es decir,  poder cambiar una capa de exposición Rest por GraphQL o una persistencia relacional por una no relacional o hasta por un esquema de mensajería, sin afectar en nada la capa de dominio.\r\nEscalabilidad (Fundamental ser Stateless)\r\nEl objetivo de esta sección es discutir sobre cómo el escalamiento horizontal y la llegada de kubernetes replantea necesariamente el manejo de estado de las aplicaciones, teniendo en cuenta que las diferentes solicitudes de un cliente llegarán a diferentes instancias de la misma aplicación servidor (docker), gracias al balanceador de cargas. \r\n\r\nEl anterior planteamiento hace que por ejemplo el manejo de sesión deba ser planteado de una manera distinta (no stateful sino stateless), en donde cada request contenga todo lo necesario para el recurso solicitado y no basarse en el estado del servidor en un momento del tiempo.\r\n\r\n\r\n3. Destruyendo el datacenter (Infraestructura como código)\r\nTradicionalmente los recursos de infraestructura iban por un lado y el desarrollo de las aplicaciones por el otro, tanto así que en algunos casos los desarrolladores desconocían por completo como estaba soportada su aplicación a nivel de infraestructura, por tanto su aprovechamiento no era el adecuado. Además, si por alguna razón extremista el datacenter fuera destruido, los tiempos que tardaría en replicarse nuevamente la infraestructura y poner a punto la aplicación eran muy altos.\r\n\r\nLa idea actualmente es que la infraestructura esté descrita como código, para que pueda versionarse tal cual como se hace con el código de la aplicación. Esto permite que acompañado  de los pipelines como código pueda recrearse la infraestructura en cualquier momento del tiempo rápidamente, definiendo además los criterios de escalamiento horizontal automático a nivel de instancias. \r\n\r\nEsto lleva a que los desarrolladores comprendamos mejor la infraestructura y por tanto la aprovechemos mejor desde el diseño de las aplicaciones. \r\n\r\n\r\n4. Secrets as a service\r\nCon este nuevo aprovechamiento de servicios cloud, es fundamental que ninguna parametrización sensible de las aplicaciones esté descrita de manera explícita en el código. Por el contrario debe utilizarse un servicio que administre estas credenciales o configuraciones sensibles y las inyecte en el código en tiempo de ejecución. En el caso de AWS puede utilizarse secrets manager.\r\n\r\nLa mejor prueba de este tema es que deberíamos estar en la capacidad de hacer público el repositorio de código y nadie debería estar en la capacidad de vulnerarlo al menos desde el punto de vista de las credenciales o datos sensibles. \r\n\r\n\r\n5. LocalStack\r\nEs una iniciativa que permite tener un stack bastante completo para interactuar con los servicios de AWS localmente, disponibles para usarlos offline. El objetivo en esta sección es dar a conocer esta iniciativa que es muy utilizada a nivel de desarrollo pero aún desconocida para muchos.  https://github.com/localstack/localstack'
  },
  colin:{
    name:'Colin Ihrig',
    figure:Colin,
    talkName:'Out of the Box Node.js Diagnostics',
    description:'In the early years of Node.js, diagnostics and debugging were considerable pain points. Modern versions of Node have improved considerably in these areas. Features like async stack traces, heap snapshots, and CPU profiling no longer require third party modules or modifications to application source code. This talk explores the various diagnostic features that have recently been built into Node.'
  },
  luis_villalobos:{
    name:'Luis Villalobos',
    figure:Luis_villalobos,
    talkName:'Desarrollo de interfaces modernas de usuario usando un \"viejo\" modelo matemático computacional',
    description:'Crear interfaces de usuario es difícil y duro, especialmente cuando no se diseña o especifica su flujo, por ejemplo, ¿Qué pasaría si un usuario hace clic a un botón y en algún punto ese usuario deja de tener conexión de internet? O al cargar una página, se necesite consultar ciertos datos, esperar a que estos se resuelvan para luego mostrar dichos datos en pantalla, pero resulta que parte de esos datos llaman otra acción para mostrar un modal, pues, este tipo de comportamientos son difíciles de implementar en especial si sólo agregamos un montón de condicionales, switches o hacemos la toma de decisiones en un componentDidMount y manipulando solo el state dentro de un componente, incluso si usamos herramientas como Redux.\r\n\r\nExiste una forma más estructurada y óptima de desarrollar flujos de interfaces de usuario para mostrar las vistas o los componentes que queremos que vean los usuarios sin importar los datos u otros factores usando un modelo matemático computacional, las máquinas de estado finitas o statecharts.'
  }
}
