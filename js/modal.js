        // Obtener el modal
        var modal = document.getElementById("myModal");
        // Boton que abre el modal
        var btn = document.getElementById("myBtn");
        // Boton que cierra el modal
        var span = document.getElementsByClassName("close")[0];
        btn.onclick = function() {
            modal.style.display = "block";
        }
        span.onclick = function() {
            modal.style.display = "none";
        }
        // Si clicas fuera del modal se cierra tambien
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }