<template>
<BarraNavegacion color="#26DBF4"/>
<!--Mapa-->
<div id="Mapa"> 
<ul>
    <li>
        
    <div class="mapouter">
        <div class="gmap_canvas">
            <h2>Ubicación</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3395.0547654214206!2d-106.42909798444622!3d31.687070746061266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86e75c32fa098c6b%3A0xb5212f75ee7855d8!2sParque%20Central%2C%20Cd%20Ju%C3%A1rez%2C%20Chih.!5e0!3m2!1ses-419!2smx!4v1647740405882!5m2!1ses-419!2smx"
             width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</li>
    <li>
        <p>
            Estamos localizados a 5 min del parque central.
            <br>
            <i class="material-icons">place</i>3337 Av. Tecnológico, <br> 
            Cd. Juárez, Chih, 32000 <br>
            <i class="material-icons">call</i>(656)123-4567 <br>
            info@nekoyaki.com
        </p>
    </li>
</ul>
</div>
<Footer color="#26DBF4"/>
</template>

<script>

export default {
  name: 'ContactoView',
}
</script>

<style scoped>
    .mapouter{position:relative;text-align:right; height: fit-content; width: fit-content;}
    .gmap_canvas {overflow:hidden;background:none!important;height:400px;width:max-content;}

    /*Funciones del mapa*/

#Mapa{
        padding: 0;
        text-align: center;
        width: 100%;

}
#Mapa ul{
    text-align: center;
    list-style-type: none;
}
#Mapa li{ 
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    
}
</style>