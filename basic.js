window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity1 = document.createElement("a-box");
            entity1.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity1.setAttribute('material', { color: 'red' } );
            entity1.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity1);

            // Add a green box to the south of the initial GPS position
            const entity2 = document.createElement("a-box");
            entity2.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity2.setAttribute('material', { color: 'green' } );
            entity2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity2);

            // Add a yellow box to the west of the initial GPS position
            const entity3 = document.createElement("a-box");
            entity3.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity3.setAttribute('material', { color: 'yellow' } );
            entity3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude - 0.001
            });
            document.querySelector("a-scene").appendChild(entity3);

            // Add a blue box to the east of the initial GPS position
            const entity4 = document.createElement("a-box");
            entity4.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            entity4.setAttribute('material', { color: 'blue' } );
            entity4.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(entity4);
        }
        testEntityAdded = true;
    });
};
