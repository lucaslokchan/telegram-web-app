window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const north = document.createElement("a-box");
            // Add a box to the north of the initial GPS position
            north.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            north.setAttribute('material', { color: 'red' } );
            north.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(north);
                
            // Add a 3D model to the south of the initial GPS position
            const south = document.createElement("a-entity");
            south.setAttribute("gps-new-entity-place", {
                latitude: e.detail.position.latitude - 0.001,
                longitude: e.detail.position.longitude
            });

            // Add the 3D model to the entity
            const model = document.createElement("a-entity");
            model.setAttribute("gltf-model", "https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Duck/glTF/Duck.gltf");
            model.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            south.appendChild(model);

            // Add the entity to the scene
            document.querySelector("a-scene").appendChild(south);
            
            // Add a green box to the south of the initial GPS position
            // const south = document.createElement("a-box");
            // south.setAttribute("scale", {
            //     x: 20, 
            //     y: 20,
            //     z: 20
            // });
            // south.setAttribute('material', { color: 'green' } );
            // south.setAttribute('gps-new-entity-place', {
            //     latitude: e.detail.position.latitude - 0.001,
            //     longitude: e.detail.position.longitude
            // });
            // document.querySelector("a-scene").appendChild(south);

            // Add a yellow box to the west of the initial GPS position
            const west = document.createElement("a-box");
            west.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            west.setAttribute('material', { color: 'yellow' } );
            west.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude - 0.001
            });
            document.querySelector("a-scene").appendChild(west);

            // Add a blue box to the east of the initial GPS position
            const east = document.createElement("a-box");
            east.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            east.setAttribute('material', { color: 'blue' } );
            east.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(east);
        }
        testEntityAdded = true;
    });
};
