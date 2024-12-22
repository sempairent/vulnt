export const cveData = [
    {
      id: 1,
      cve: "CVE-2023-51385",
      descripcion: "Vulnerabilidad crítica en OpenSSH que permite a un atacante remoto ejecutar comandos arbitrarios en el sistema al enviar un nombre de usuario especialmente diseñado. Un atacante podría explotar esta vulnerabilidad para obtener acceso completo al sistema, robar datos confidenciales, realizar ataques de denegación de servicio o incluso tomar el control completo del sistema.",
      mitigar: "Actualizar OpenSSH a la versión 9.6 o superior. Desactivar el acceso SSH a cuentas no esenciales. Implementar un firewall para bloquear el acceso SSH desde direcciones IP no confiables. Considerar la implementación de autenticación de dos factores para una mayor seguridad.",
      criticidad: "alta",
    },
    {
      id: 2,
      cve: "CVE-2021-41617",
      descripcion: "Vulnerabilidad crítica que podría afectar a múltiples sistemas en diversas plataformas. El atacante podría aprovecharla para obtener acceso no autorizado.",
      mitigar: "Aplicar los parches de seguridad proporcionados por el proveedor del software afectado. Revisar y actualizar todas las dependencias. Implementar controles de acceso basados en roles (RBAC) para limitar los privilegios de los usuarios.",
      criticidad: "alta",
    },
    {
      id: 3,
      cve: "CVE-2021-36368",
      descripcion: "Vulnerabilidad crítica que afecta a Apache HTTP Server. Un atacante podría ejecutar código remoto si el servidor es vulnerable a este fallo.",
      mitigar: "Actualizar Apache HTTP Server a la versión más reciente disponible y aplicar los parches de seguridad proporcionados. Además, configurar adecuadamente el servidor web para minimizar la superficie de ataque.",
      criticidad: "alta",
    },
    {
      id: 4,
      cve: "CVE-2007-2768",
      descripcion: "Vulnerabilidad crítica en Microsoft Windows que permite la ejecución de código remoto a través de una manipulación de las estructuras del sistema operativo.",
      mitigar: "Aplicar las actualizaciones y parches de seguridad proporcionados por Microsoft para cerrar la vulnerabilidad. Se recomienda ejecutar un análisis completo del sistema después de la actualización para verificar que no haya compromisos.",
      criticidad: "alta",
    },
    {
      id: 5,
      cve: "CVE-2020-14145",
      descripcion: "Vulnerabilidad crítica en Microsoft Dynamics 365 que podría permitir a un atacante ejecutar comandos arbitrarios en el servidor.",
      mitigar: "Actualizar Microsoft Dynamics 365 a la versión más reciente disponible y aplicar los parches de seguridad correspondientes. Implementar medidas de seguridad adicionales en el servidor para restringir el acceso no autorizado.",
      criticidad: "alta",
    },
    {
      id: 6,
      cve: "CVE-2023-51767",
      descripcion: "Vulnerabilidad crítica cuyo detalle específico aún está pendiente. Sin embargo, se anticipa que tendrá un impacto significativo en los sistemas afectados.",
      mitigar: "Monitorear las actualizaciones del proveedor. Aplicar parches y actualizaciones a otros componentes del sistema que puedan estar relacionados para reducir el riesgo de explotación.",
      criticidad: "alta",
    },
    {
      id: 7,
      cve: "CVE-2016-20012",
      descripcion: "Vulnerabilidad de alta severidad en Google Chrome que podría permitir a un atacante ejecutar código malicioso en el navegador.",
      mitigar: "Actualizar Google Chrome a la última versión disponible. Además, se recomienda usar configuraciones de seguridad como la ejecución de scripts en sitios de confianza y la desactivación de extensiones no verificadas.",
      criticidad: "alta",
    },
    {
      id: 8,
      cve: "CVE-2023-48795",
      descripcion: "Vulnerabilidad crítica que afecta a los servidores web, permitiendo la ejecución de código malicioso si no se mitiga adecuadamente.",
      mitigar: "Aplicar actualizaciones de seguridad a los servidores web afectados. Reforzar la seguridad del servidor, desactivar servicios innecesarios y configurar correctamente los permisos de acceso.",
      criticidad: "alta",
    },
    {
      id: 9,
      cve: "CVE-2021-3618",
      descripcion: "Vulnerabilidad crítica que afecta a algunas versiones de macOS, lo que permite a los atacantes ejecutar código malicioso de manera no autorizada.",
      mitigar: "Actualizar macOS a la última versión disponible. Además, asegúrese de que las configuraciones de seguridad estén habilitadas, como el firewall y el control de aplicaciones no autorizadas.",
      criticidad: "alta",
    },
    {
      id: 10,
      cve: "CVE-2020-11022",
      descripcion: "Vulnerabilidad crítica en la pila TCP/IP de Windows, que podría permitir a un atacante ejecutar código arbitrario en el sistema afectado.",
      mitigar: "Aplicar las actualizaciones de seguridad proporcionadas por Microsoft para mitigar esta vulnerabilidad. También se recomienda deshabilitar puertos no utilizados y proteger las conexiones de red.",
      criticidad: "alta",
    },
    {
      id: 11,
      cve: "CVE-2020-11023",
      descripcion: "Vulnerabilidad crítica en WebKit, el motor de renderizado central para muchos navegadores, que podría permitir a un atacante ejecutar código malicioso.",
      mitigar: "Actualizar los navegadores que usan WebKit (como Safari) a la última versión disponible. Además, emplear un entorno de navegación seguro desactivando características innecesarias.",
      criticidad: "alta",
    },
    {
      id: 12,
      cve: "CVE-2023-44487",
      descripcion: "Vulnerabilidad crítica en un software ampliamente utilizado, cuyo impacto podría ser significativo si es explotado.",
      mitigar: "Aplicar los parches proporcionados por el proveedor lo antes posible. También se recomienda realizar auditorías de seguridad para identificar posibles accesos no autorizados a los sistemas.",
      criticidad: "alta",
    },
    {
      id: 13,
      cve: "CVE-2019-11358",
      descripcion: "Vulnerabilidad crítica en Telerik UI para ASP.NET AJAX, que podría ser explotada para ejecutar código malicioso en aplicaciones web.",
      mitigar: "Actualizar Telerik UI a la versión más reciente disponible. También se recomienda verificar que las configuraciones de seguridad en las aplicaciones web sean robustas.",
      criticidad: "alta",
    },
    {
      id: 14,
      cve: "CVE-2022-28614",
      descripcion: "Vulnerabilidad crítica en VMware, que podría permitir la ejecución de código remoto en máquinas virtualizadas.",
      mitigar: "Aplicar las actualizaciones de seguridad de VMware inmediatamente. Además, se recomienda restringir el acceso a la infraestructura de máquinas virtuales mediante controles de acceso estrictos.",
      criticidad: "alta",
    },
    {
      id: 15,
      cve: "CVE-2021-32785",
      descripcion: "Vulnerabilidad crítica en Oracle WebLogic Server, que podría ser explotada para obtener acceso no autorizado al sistema.",
      mitigar: "Aplicar los parches de seguridad de Oracle WebLogic Server de inmediato y revisar las configuraciones de seguridad para minimizar los riesgos.",
      criticidad: "alta",
    },
    {
      id: 16,
      cve: "CVE-2021-32790",
      descripcion: "Vulnerabilidad crítica en Oracle WebLogic Server, que podría permitir la ejecución de código arbitrario.",
      mitigar: "Actualizar Oracle WebLogic Server a la versión más reciente y aplicar los parches de seguridad recomendados.",
      criticidad: "alta",
    },
    {
      id: 17,
      cve: "CVE-2021-40438",
      descripcion: "Vulnerabilidad crítica en Microsoft Exchange Server, que podría ser explotada para tomar control del servidor de correo.",
      mitigar: "Actualizar Microsoft Exchange Server a la última versión disponible y aplicar los parches de seguridad pertinentes.",
      criticidad: "alta",
    },
    {
      id: 18,
      cve: "CVE-2023-25690",
      descripcion: "Vulnerabilidad crítica en varios dispositivos, que podría ser explotada para comprometer la seguridad de los sistemas afectados.",
      mitigar: "Monitorear las actualizaciones del proveedor y aplicar los parches tan pronto como estén disponibles. También se recomienda realizar auditorías de seguridad para detectar accesos no autorizados.",
      criticidad: "alta",
    },
    {
      id: 19,
      cve: "CVE-2021-26691",
      descripcion: "Vulnerabilidad crítica en productos de Microsoft, que podría permitir la ejecución de código malicioso.",
      mitigar: "Aplicar las actualizaciones de seguridad de Microsoft inmediatamente para protegerse de esta vulnerabilidad.",
      criticidad: "alta",
    },
    {
      id: 20,
      cve: "CVE-2024-5458",
      descripcion: "Vulnerabilidad crítica cuya descripción detallada está pendiente, pero se espera que tenga un gran impacto.",
      mitigar: "Monitorear las actualizaciones del proveedor. Aplicar los parches tan pronto como estén disponibles y mantener el sistema actualizado.",
      criticidad: "alta",
    },
  ];
  
  export const vulnerabilitiesMedia = [
    
   
    {
      id: 6,
      cve: "CVE-2020-15778",
      descripcion: "Vulnerabilidad de XSS en el componente de autenticación.",
      mitigar: "Validar y sanitizar correctamente las entradas de usuario.",
      criticidad: "Media",
    },
    {
      id: 12,
      cve: "CVE-2023-38408",
      descripcion: "Exposición de información sensible debido a una configuración incorrecta.",
      mitigar: "Revisar y ajustar la configuración del servidor para evitar la exposición de datos sensibles.",
      criticidad: "Media",
    },
    {
      id: 19,
      cve: "CVE-2016-10735",
      descripcion: "Vulnerabilidad de denegación de servicio (DoS) en el servicio de autenticación.",
      mitigar: "Aplicar limitaciones en el número de intentos de autenticación y revisar la seguridad del servicio.",
      criticidad: "Media",
    },
    {
      id: 28,
      cve: "CVE-2019-6110",
      descripcion: "Vulnerabilidad de inyección SQL en el sistema de administración de usuarios.",
      mitigar: "Sanitizar las entradas de usuario para prevenir inyecciones SQL.",
      criticidad: "Media",
    },
    
    {
      id: 36,
      cve: "CVE-2022-37454",
      descripcion: "Riesgo de fuga de información debido a un mal manejo de permisos en el sistema.",
      mitigar: "Revisar y restringir los permisos de acceso según el principio de menor privilegio.",
      criticidad: "Media",
    },
    {
      id: 45,
      cve: "CVE-2013-0942",
      descripcion: "Falta de validación de entradas en un servicio de servidor web.",
      mitigar: "Añadir validación de entradas y mejorar la seguridad del servidor web.",
      criticidad: "Media",
    },
    {
      id: 57,
      cve: "CVE-2022-23943",
      descripcion: "Vulnerabilidad de desbordamiento de búfer en el protocolo de comunicación.",
      mitigar: "Actualizar los protocolos de comunicación a versiones más seguras.",
      criticidad: "Media",
    }
  ];
  
 export const vulnerabilitiesBaja = [
    {
      id: 4,
      cve: "CVE-2007-2768",
      descripcion: "Vulnerabilidad de inyección de comandos en una versión obsoleta del servidor web.",
      mitigar: "Actualizar a la versión más reciente del servidor web.",
      criticidad: "Baja",
    },
    {
      id: 8,
      cve: "CVE-2016-20012",
      descripcion: "Vulnerabilidad de denegación de servicio (DoS) en el servicio de administración remota.",
      mitigar: "Revisar las configuraciones del servicio y agregar medidas de seguridad adicionales.",
      criticidad: "Baja",
    },
    {
      id: 13,
      cve: "CVE-2021-3618",
      descripcion: "Vulnerabilidad en la validación de entradas en un sistema de mensajería.",
      mitigar: "Mejorar la validación de entradas y realizar pruebas de seguridad más exhaustivas.",
      criticidad: "Baja",
    },
    {
      id: 16,
      cve: "CVE-2023-44487",
      descripcion: "Posible fuga de información a través de un registro no seguro en una aplicación web.",
      mitigar: "Revisar y asegurar que todos los registros sean encriptados correctamente.",
      criticidad: "Baja",
    },
    {
      id: 18,
      cve: "CVE-2021-23017",
      descripcion: "Vulnerabilidad de redirección en un sistema de servidor web.",
      mitigar: "Actualizar la configuración del servidor para bloquear redirecciones no autorizadas.",
      criticidad: "Baja",
    },
    {
      id: 21,
      cve: "CVE-2018-14042",
      descripcion: "Vulnerabilidad en una antigua versión de una librería JavaScript que podría causar fallos menores.",
      mitigar: "Actualizar la librería a una versión más reciente.",
      criticidad: "Baja",
    },
    {
      id: 28,
      cve: "CVE-2019-6110",
      descripcion: "Vulnerabilidad de inyección SQL en el sistema de administración de usuarios.",
      mitigar: "Sanitizar las entradas de usuario para prevenir inyecciones SQL.",
      criticidad: "Baja",
    },
    {
      id: 40,
      cve: "CVE-2020-11984",
      descripcion: "Vulnerabilidad de lectura de archivos no autorizados en un sistema de almacenamiento de archivos.",
      mitigar: "Revisar las configuraciones de permisos de archivos y restringir el acceso no autorizado.",
      criticidad: "Baja",
    },
    {
      id: 42,
      cve: "CVE-2013-4365",
      descripcion: "Falta de autenticación en un servicio secundario, permitiendo acceso no autorizado.",
      mitigar: "Implementar autenticación y control de acceso más estrictos en el servicio.",
      criticidad: "Baja",
    },
    {
      id: 49,
      cve: "CVE-2019-17567",
      descripcion: "Exposición de información a través de una configuración de seguridad incorrecta.",
      mitigar: "Ajustar la configuración de seguridad del sistema para proteger la información sensible.",
      criticidad: "Baja",
    }
  ];
  

  

  