
    // Estructura de datos
    let radiologia = [
        { hora: "9:00", especialista: "Dr. Perez", paciente: "Juan Pérez", rut: "12345678-9", prevision: "Fonasa" },
        { hora: "10:00", especialista: "Dr. González", paciente: "Ana Gálvez", rut: "98765432-1", prevision: "Isapre" }
    ];

    let traumatologia = [
        { hora: "8:00", especialista: "Dr. Martinez", paciente: "Pedro Paredes", rut: "12312312-3", prevision: "Fonasa" },
        { hora: "12:00", especialista: "Dr. Torres", paciente: "Lucía Lopez", rut: "23123123-2", prevision: "Isapre" }
    ];

    let dental = [
        { hora: "11:00", especialista: "Dr. Soto", paciente: "Javier Perez", rut: "31231231-1", prevision: "Fonasa" },
        { hora: "13:00", especialista: "Dr. Díaz", paciente: "Carla Mendez", rut: "43243243-2", prevision: "Isapre" }
    ];

    // Mostrar primeras y últimas atenciones
    document.getElementById("statistics").innerHTML = `
        <p>Primera atención Radiología: ${radiologia[0].paciente} - ${radiologia[0].prevision}</p>
        <p>Última atención Radiología: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}</p>
        <p>Primera atención Traumatología: ${traumatologia[0].paciente} - ${traumatologia[0].prevision}</p>
        <p>Última atención Traumatología: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}</p>
        <p>Primera atención Dental: ${dental[0].paciente} - ${dental[0].prevision}</p>
        <p>Última atención Dental: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}</p>
    `;

    // Función para llenar la tabla
    function llenarTabla(idTabla, lista) {
        let tbody = document.getElementById(idTabla);
        tbody.innerHTML = ''; // Limpiar el contenido anterior
        lista.forEach(atencion => {
            let fila = `<tr>
                <td>${atencion.hora}</td>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
            </tr>`;
            tbody.innerHTML += fila;
        });
    }

    // Llenar las tablas
    llenarTabla("radiologia", radiologia);
    llenarTabla("traumatologia", traumatologia);
    llenarTabla("dental", dental);

