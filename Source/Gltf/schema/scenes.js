function scenes() {
    return {
        "scene": "defaultScene",
        "scenes": {
            "defaultScene": {
                "name": "user-defined scene name",
                "nodes": [
                    "mesh_node_id",
                    "camera_node_id"
                ],
                "extensions": {
                    "extension_name": {
                        "extension specific": "value"
                    }
                },
                "extras": {
                    "Application specific": "The extra object can contain any properties."
                }
            }
        }
    }
}
