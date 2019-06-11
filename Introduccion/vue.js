
const app = new Vue({
    el: '#app',
    data:{
        titulo : 'Mi Gym',
        nuevaTarea : '',
        tareas : []
    },
    methods : {
        agregarTarea(){
            this.tareas.push({
                tarea : this.nuevaTarea,
                estado : false
            });
            this.nuevaTarea = '';
            localStorage.setItem('gym-local',JSON.stringify( this.tareas));
        },
        editarTarea(tarea,index){
            //2 maneras de selecionar el elemento a editar 
            tarea.estado = !tarea.estado;
            //otra forma
            //this.tareas[index].estado =!this.tareas[index].estado;
            localStorage.setItem('gym-local',JSON.stringify( this.tareas));

        },
        eliminarTarea(tarea){
            //forma mas sencilla recibir por parametro el index
            var pos = this.tareas.indexOf(tarea);
            this.tareas.splice(pos,1);
            localStorage.setItem('gym-local',JSON.stringify( this.tareas));
        },
        
    },
    created(){
        var datosDB = JSON.parse(localStorage.getItem('gym-local'));
        if(datosDB){
            this.tareas = datosDB;
        }
    }

});

