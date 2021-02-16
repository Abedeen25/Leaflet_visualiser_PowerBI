import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var leafletMapperD35709EE5B804DB6A84F14E61A6037D3_DEBUG: IVisualPlugin = {
    name: 'leafletMapperD35709EE5B804DB6A84F14E61A6037D3_DEBUG',
    displayName: 'LeafletMapper',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["leafletMapperD35709EE5B804DB6A84F14E61A6037D3_DEBUG"] = leafletMapperD35709EE5B804DB6A84F14E61A6037D3_DEBUG;
}

export default leafletMapperD35709EE5B804DB6A84F14E61A6037D3_DEBUG;