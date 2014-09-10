// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.color_scale');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.color');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t12914 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t12914 = (function (owner,threshold_colors,color_scale_component,meta12915){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta12915 = meta12915;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t12914.cljs$lang$type = true;
clustermap.components.color_scale.t12914.cljs$lang$ctorStr = "clustermap.components.color-scale/t12914";
clustermap.components.color_scale.t12914.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.color-scale/t12914");
});
clustermap.components.color_scale.t12914.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t12914.prototype.om$core$IRender$render$arity$1 = (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4266__auto__ = ((function (this__9492__auto____$1){
return (function iter__12917(s__12918){return (new cljs.core.LazySeq(null,((function (this__9492__auto____$1){
return (function (){var s__12918__$1 = s__12918;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12918__$1);if(temp__4126__auto__)
{var s__12918__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12918__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__12918__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__12920 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__12919 = (0);while(true){
if((i__12919 < size__4265__auto__))
{var vec__12923 = cljs.core._nth.call(null,c__4264__auto__,i__12919);var threshold = cljs.core.nth.call(null,vec__12923,(0),null);var color = cljs.core.nth.call(null,vec__12923,(1),null);cljs.core.chunk_append.call(null,b__12920,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__12925 = (i__12919 + (1));
i__12919 = G__12925;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12920),iter__12917.call(null,cljs.core.chunk_rest.call(null,s__12918__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12920),null);
}
} else
{var vec__12924 = cljs.core.first.call(null,s__12918__$2);var threshold = cljs.core.nth.call(null,vec__12924,(0),null);var color = cljs.core.nth.call(null,vec__12924,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__12917.call(null,cljs.core.rest.call(null,s__12918__$2)));
}
} else
{return null;
}
break;
}
});})(this__9492__auto____$1))
,null,null));
});})(this__9492__auto____$1))
;return iter__4266__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t12914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12916){var self__ = this;
var _12916__$1 = this;return self__.meta12915;
});
clustermap.components.color_scale.t12914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12916,meta12915__$1){var self__ = this;
var _12916__$1 = this;return (new clustermap.components.color_scale.t12914(self__.owner,self__.threshold_colors,self__.color_scale_component,meta12915__$1));
});
clustermap.components.color_scale.__GT_t12914 = (function __GT_t12914(owner__$1,threshold_colors__$1,color_scale_component__$1,meta12915){return (new clustermap.components.color_scale.t12914(owner__$1,threshold_colors__$1,color_scale_component__$1,meta12915));
});
}
return (new clustermap.components.color_scale.t12914(owner,threshold_colors,color_scale_component,null));
});
clustermap.components.color_scale.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.color_scale.color_scale_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
