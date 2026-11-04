const SOACHA_CENTER = { lat: 4.5804, lng: -74.2157 };
const BRAND_RED = '#891b1d';

const rutasSoacha = [
    {
        id: "ruta-soa-001",
        nombre: "Soacha Centro - Vereda El Charquito",
        municipio_origen: "Soacha",
        vereda_origen: "Casco Urbano (Parque Principal)",
        destino: "Vereda El Charquito",
        punto_encuentro: "Plaza Principal de Soacha (Costado Sur) / Paradero Av. Indumil",
        horarios: ["06:00", "08:30", "11:00", "14:00", "17:30"],
        dias_operacion: "Lunes a Domingo",
        tipo_vehiculo: "Campero 4x4",
        tarifa_referencia: "$2.500",
        ruta_alterna: "Desvío por variante la Arenosa - Puente Canoas ante crecientes del Río Bogotá.",
        estado: "Ruta Alterna / Contingencia",
        fuente: "Transportadores Veredales de El Charquito",
        fecha_actualizacion: "2026-11-04",
        coords: { lat: 4.5778, lng: -74.2230 },
        path: [{ lat: 4.5804, lng: -74.2157 }, { lat: 4.5710, lng: -74.2250 }, { lat: 4.5620, lng: -74.2380 }]
    },
    {
        id: "ruta-soa-002",
        nombre: "Soacha (San Mateo) - Vereda Cascajal",
        municipio_origen: "Soacha",
        vereda_origen: "Estación San Mateo",
        destino: "Vereda Cascajal",
        punto_encuentro: "Bahía de Transporte Autopista Sur con Calle 30 (San Mateo)",
        horarios: ["05:30", "07:30", "12:00", "16:30"],
        dias_operacion: "Lunes a Sábado",
        tipo_vehiculo: "Camioneta",
        tarifa_referencia: "$3.000",
        ruta_alterna: "Acceso alterno por vía ramal Indumil - Sector Puerta Grande.",
        estado: "Operativa",
        fuente: "Junta de Acción Comunal Cascajal",
        fecha_actualizacion: "2026-11-04",
        coords: { lat: 4.5680, lng: -74.2080 },
        path: [{ lat: 4.5880, lng: -74.2020 }, { lat: 4.5750, lng: -74.2100 }, { lat: 4.5680, lng: -74.2080 }]
    },
    {
        id: "ruta-soa-003",
        nombre: "Soacha (Av. Indumil) - Vereda San Eugenio",
        municipio_origen: "Soacha",
        vereda_origen: "Sector Tropezón / Av. Indumil",
        destino: "Vereda San Eugenio",
        punto_encuentro: "Paradero Transversal 7 (Glorieta Av. Indumil)",
        horarios: ["06:15", "11:30", "15:45"],
        dias_operacion: "Lunes a Viernes",
        tipo_vehiculo: "Campero 4x4",
        tarifa_referencia: "$2.800",
        ruta_alterna: "Tránsito lento por obras de pavimentación; paso alterno a un carril.",
        estado: "Mantenimiento",
        fuente: "Alcaldía Municipal de Soacha - Sec. Movilidad",
        fecha_actualizacion: "2026-11-03",
        coords: { lat: 4.5590, lng: -74.2310 },
        path: [{ lat: 4.5800, lng: -74.2200 }, { lat: 4.5690, lng: -74.2300 }, { lat: 4.5590, lng: -74.2310 }]
    },
    {
        id: "ruta-soa-004",
        nombre: "Soacha Centro - Vereda Panamá",
        municipio_origen: "Soacha",
        vereda_origen: "Plaza Central Soacha",
        destino: "Vereda Panamá",
        punto_encuentro: "Calle 13 con Carrera 7 (Centro de Soacha)",
        horarios: ["06:00", "12:30", "17:00"],
        dias_operacion: "Lunes a Sábado",
        tipo_vehiculo: "Buseta",
        tarifa_referencia: "$2.700",
        ruta_alterna: "Ruta directa por corredor veredal norte sin novedades.",
        estado: "Operativa",
        fuente: "Cooperativa de Transportadores de Soacha",
        fecha_actualizacion: "2026-11-04",
        coords: { lat: 4.5950, lng: -74.2290 },
        path: [{ lat: 4.5804, lng: -74.2157 }, { lat: 4.5880, lng: -74.2220 }, { lat: 4.5950, lng: -74.2290 }]
    },
    {
        id: "ruta-soa-005",
        nombre: "Soacha - Vereda Hungría",
        municipio_origen: "Soacha",
        vereda_origen: "Paradero Autopista Sur Calle 13",
        destino: "Vereda Hungría",
        punto_encuentro: "Autopista Sur frente a Centro Soacha",
        horarios: ["05:45", "10:00", "14:15", "18:00"],
        dias_operacion: "Lunes a Domingo",
        tipo_vehiculo: "Campero 4x4",
        tarifa_referencia: "$3.200",
        ruta_alterna: "Camino rural transitable sólo para vehículos 4x4 por lluvias.",
        estado: "Operativa",
        fuente: "Líderes Comunitarios Vereda Hungría",
        fecha_actualizacion: "2026-11-02",
        coords: { lat: 4.6020, lng: -74.2380 },
        path: [{ lat: 4.5804, lng: -74.2157 }, { lat: 4.5920, lng: -74.2280 }, { lat: 4.6020, lng: -74.2380 }]
    },
    {
        id: "ruta-soa-006",
        nombre: "Soacha (San Mateo) - Sibaté / Conexión Sur",
        municipio_origen: "Soacha",
        vereda_origen: "Puente Peatonal San Mateo",
        destino: "Sibaté / Conexión Sur",
        punto_encuentro: "Terminal Intermunicipal San Mateo (Autopista Sur)",
        horarios: ["Cada 15 minutos (05:00 a 21:00)"],
        dias_operacion: "Lunes a Domingo",
        tipo_vehiculo: "Buseta",
        tarifa_referencia: "$3.500",
        ruta_alterna: "Vía Soacha - Sibaté con flujo continuo sobre la Autopista Sur.",
        estado: "Operativa",
        fuente: "Terminal de Transportes Soacha / Cundinamarca",
        fecha_actualizacion: "2026-11-04",
        coords: { lat: 4.5450, lng: -74.2420 },
        path: [{ lat: 4.5880, lng: -74.2020 }, { lat: 4.5700, lng: -74.2180 }, { lat: 4.5450, lng: -74.2420 }]
    }
];

const corredores = [
    { path: [{ lat: 4.6050, lng: -74.1850 }, { lat: 4.5880, lng: -74.2020 }, { lat: 4.5750, lng: -74.2150 }, { lat: 4.5500, lng: -74.2380 }], color: "#334155", title: "Autopista Sur" },
    { path: [{ lat: 4.5804, lng: -74.2157 }, { lat: 4.5710, lng: -74.2250 }, { lat: 4.5590, lng: -74.2310 }], color: "#2563eb", title: "Av. Indumil" },
    { path: [{ lat: 4.5710, lng: -74.2250 }, { lat: 4.5650, lng: -74.2320 }, { lat: 4.5620, lng: -74.2380 }, { lat: 4.5778, lng: -74.2230 }], color: "#16a34a", title: "Vía El Charquito" },
    { path: [{ lat: 4.5880, lng: -74.2020 }, { lat: 4.6000, lng: -74.2050 }, { lat: 4.6080, lng: -74.2120 }], color: "#d97706", title: "San Mateo / Ciudad Verde" },
    { path: [{ lat: 4.5880, lng: -74.2020 }, { lat: 4.5700, lng: -74.2180 }, { lat: 4.5450, lng: -74.2420 }], color: "#9333ea", title: "Vía Soacha - Sibaté" }
];

let lMap = null;
let activeLayers = [];
let activeRouteObj = null;
let currentFontSize = 0;
let isContrast = false;

const ICONS = {
    check: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class=""><circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/></svg>`.replace('class=""', 'class="' + c + '"'),
    alert: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class=""><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/></svg>`.replace('class=""', 'class="' + c + '"'),
    wrench: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class=""><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/></svg>`.replace('class=""', 'class="' + c + '"'),
    pin: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class=""><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>`.replace('class=""', 'class="' + c + '"'),
    chevron: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class=""><path d="m9 5 7 7-7 7"/></svg>`.replace('class=""', 'class="' + c + '"')
};

const $ = (id) => document.getElementById(id);

window.onload = function () {
    renderRutas(rutasSoacha);
    initMap();
};

/* ---------------- Mapa ---------------- */

function initMap() {
    const container = $('soachaMap');
    if (typeof L === 'undefined') {
        container.innerHTML = '<div class="w-full h-full flex items-center justify-center p-6 text-center text-sm text-slate-600">No se pudo cargar el mapa. Revisa tu conexión a internet.</div>';
        return;
    }
    lMap = L.map(container).setView([SOACHA_CENTER.lat, SOACHA_CENTER.lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; Colaboradores de OpenStreetMap'
    }).addTo(lMap);

    corredores.forEach(road => {
        L.polyline(road.path.map(p => [p.lat, p.lng]), { color: road.color, weight: 5, opacity: 0.8 })
            .addTo(lMap)
            .bindPopup('<strong style="color:' + road.color + ';">' + road.title + '</strong>');
    });

    rutasSoacha.forEach(ruta => {
        L.circleMarker([ruta.coords.lat, ruta.coords.lng], { radius: 9, color: '#ffffff', weight: 3, fillColor: BRAND_RED, fillOpacity: 1 })
            .addTo(lMap)
            .bindPopup(popupHtml(ruta));
    });

    setTimeout(() => lMap.invalidateSize(), 200);
}

function popupHtml(ruta) {
    return '<div style="font-family:Inter,sans-serif;"><strong style="color:#891b1d;">' + ruta.nombre +
        '</strong><br/><span style="font-size:11px;color:#475569;">' + ruta.punto_encuentro +
        '</span><br/><span style="font-size:11px;font-weight:bold;color:#16a34a;">Tarifa: ' + ruta.tarifa_referencia + '</span></div>';
}

function resetMapFocus() {
    if (lMap) lMap.setView([SOACHA_CENTER.lat, SOACHA_CENTER.lng], 13);
}

function clearHighlight() {
    activeLayers.forEach(l => lMap && lMap.removeLayer(l));
    activeLayers = [];
}

function focusOnMap(id) {
    const ruta = rutasSoacha.find(r => r.id === id);
    if (!ruta || !lMap) return;
    $('soachaMap').scrollIntoView({ behavior: 'smooth', block: 'center' });
    clearHighlight();
    const line = L.polyline(ruta.path.map(p => [p.lat, p.lng]), { color: '#f59e0b', weight: 7, opacity: 1 }).addTo(lMap);
    activeLayers.push(line);
    lMap.setView([ruta.coords.lat, ruta.coords.lng], 15);
    L.popup().setLatLng([ruta.coords.lat, ruta.coords.lng])
        .setContent('<strong style="color:#891b1d;">' + ruta.nombre + '</strong>')
        .openOn(lMap);
}

/* ---------------- Tarjetas y filtros ---------------- */

function renderRutas(data) {
    const container = $('rutasContainer');
    const emptyState = $('emptyState');

    if (data.length === 0) {
        container.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }
    emptyState.classList.add('hidden');

    let html = '';
    data.forEach(ruta => {
        let badgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
        let statusIcon = ['check', 'text-emerald-600'];
        if (ruta.estado.includes('Alterna')) {
            badgeClass = 'bg-amber-100 text-amber-900 border-amber-300';
            statusIcon = ['alert', 'text-amber-600'];
        } else if (ruta.estado.includes('Mantenimiento')) {
            badgeClass = 'bg-blue-100 text-blue-900 border-blue-300';
            statusIcon = ['wrench', 'text-blue-600'];
        }

        html += `
            <div class="bg-white rounded-3xl p-5 shadow-sm border border-slate-200 card-bg flex flex-col justify-between space-y-4 hover:shadow-md transition">
                <div class="space-y-3">
                    <div class="flex items-start justify-between gap-2">
                        <h4 class="text-base font-extrabold text-slate-900">${ruta.nombre}</h4>
                        <span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold border ${badgeClass} shrink-0">
                            ${ICONS[statusIcon[0]](statusIcon[1])}
                            <span>${ruta.estado}</span>
                        </span>
                    </div>

                    <div class="text-xs text-slate-600 space-y-1 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                        <div><strong>Sale de:</strong> ${ruta.vereda_origen}</div>
                        <div><strong>Va a:</strong> ${ruta.destino}</div>
                        <div><strong>Vehículo:</strong> ${ruta.tipo_vehiculo} | <strong>Tarifa:</strong> <span class="font-bold text-slate-900">${ruta.tarifa_referencia}</span></div>
                    </div>

                    <div class="flex flex-wrap gap-1.5 pt-1">
                        <span class="text-[11px] font-bold text-slate-400 self-center mr-1">Horarios:</span>
                        ${ruta.horarios.map(h => `<span class="bg-udec-50 text-udec-800 border border-udec-200 px-2.5 py-0.5 rounded-lg text-xs font-bold">${h}</span>`).join('')}
                    </div>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <button onclick="focusOnMap('${ruta.id}')" class="text-xs font-bold text-udec-700 hover:text-udec-900 flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class="text-udec-700"><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
                        <span>Ver en mapa</span>
                    </button>
                    <button onclick="openRouteModal('${ruta.id}')" class="bg-udec-800 hover:bg-udec-900 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-1">
                        <span>Ver más</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="width:1em;height:1em;display:inline-block;vertical-align:-0.125em" class="text-[10px]"><path d="m9 5 7 7-7 7"/></svg>
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function filterRutas() {
    const query = $('searchInput').value.toLowerCase();
    const vereda = $('veredaFilter').value;
    const estado = $('estadoFilter').value;

    const filtered = rutasSoacha.filter(r => {
        const matchQuery = r.nombre.toLowerCase().includes(query) ||
                           r.destino.toLowerCase().includes(query) ||
                           r.vereda_origen.toLowerCase().includes(query) ||
                           r.tipo_vehiculo.toLowerCase().includes(query);
        const matchVereda = vereda === '' || r.destino.includes(vereda) || r.nombre.includes(vereda);
        const matchEstado = estado === '' || r.estado.includes(estado);
        return matchQuery && matchVereda && matchEstado;
    });
    renderRutas(filtered);
}

function resetFilters() {
    $('searchInput').value = '';
    $('veredaFilter').value = '';
    $('estadoFilter').value = '';
    renderRutas(rutasSoacha);
    clearHighlight();
    resetMapFocus();
}

/* ---------------- Detalle ---------------- */

function openRouteModal(id) {
    const ruta = rutasSoacha.find(r => r.id === id);
    if (!ruta) return;
    activeRouteObj = ruta;

    $('modalTitle').innerText = ruta.nombre;
    $('modalSubTitle').innerText = ruta.vereda_origen + ' ➔ ' + ruta.destino;
    $('modalEstado').innerText = ruta.estado;
    $('modalVehiculo').innerText = ruta.tipo_vehiculo;
    $('modalTarifa').innerText = ruta.tarifa_referencia + ' COP';
    $('modalDias').innerText = 'Días: ' + ruta.dias_operacion;
    $('modalPunto').innerText = ruta.punto_encuentro;
    $('modalRutaAlterna').innerText = ruta.ruta_alterna;
    $('modalFuente').innerText = ruta.fuente;
    $('modalFecha').innerText = ruta.fecha_actualizacion;
    $('modalHorarios').innerHTML = ruta.horarios.map(h => `<span class="bg-udec-800 text-white px-3 py-1 rounded-xl text-xs font-bold">${h}</span>`).join('');

    $('routeModal').classList.remove('hidden');
}

function closeRouteModal() { $('routeModal').classList.add('hidden'); }

function focusRouteOnMapFromModal() {
    if (activeRouteObj) {
        closeRouteModal();
        focusOnMap(activeRouteObj.id);
    }
}

/* ---------------- Accesibilidad ---------------- */

function toggleFontSize() {
    const root = document.documentElement;
    const lbl = $('fontSizeLabel');
    root.classList.remove('text-normal', 'text-large', 'text-xlarge');
    currentFontSize = (currentFontSize + 1) % 3;
    if (currentFontSize === 1) { root.classList.add('text-large'); lbl.innerText = 'Texto: Grande'; }
    else if (currentFontSize === 2) { root.classList.add('text-xlarge'); lbl.innerText = 'Texto: Muy Grande'; }
    else { root.classList.add('text-normal'); lbl.innerText = 'Texto: Normal'; }
}

function toggleContrast() {
    isContrast = !isContrast;
    $('mainBody').classList.toggle('high-contrast', isContrast);
}

function closeAlert() { $('alertBanner').style.display = 'none'; }