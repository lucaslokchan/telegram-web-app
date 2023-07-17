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

            // Add a green sphere to the south of the initial GPS position
            const entity2 = document.createElement("a-sphere");
            entity2.setAttribute("radius", 10);
            entity2.setAttribute('material', { color: 'green' } );
            entity2.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude - 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity2);

            // Add a yellow cylinder to the west of the initial GPS position
            const entity3 = document.createElement("a-cylinder");
            entity3.setAttribute("height", 20);
            entity3.setAttribute("radius", 10);
            entity3.setAttribute('material', { color: 'yellow' } );
            entity3.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude - 0.001
            });
            document.querySelector("a-scene").appendChild(entity3);

            // Add a blue triangle to the east of the initial GPS position
            const entity4 = document.createElement("a-triangle");
            entity4.setAttribute("vertex-a", "0 10 0");
            entity4.setAttribute("vertex-b", "-10 -10 0");
            entity4.setAttribute("vertex-c", "10 -10 0");
            entity4.setAttribute('material', { color: 'blue' } );
            entity4.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude,
                longitude: e.detail.position.longitude + 0.001
            });
            document.querySelector("a-scene").appendChild(entity4);
        }
