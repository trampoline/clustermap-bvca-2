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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t51150 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t51150 = (function (owner,threshold_colors,color_scale_component,meta51151){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta51151 = meta51151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t51150.cljs$lang$type = true;
clustermap.components.color_scale.t51150.cljs$lang$ctorStr = "clustermap.components.color-scale/t51150";
clustermap.components.color_scale.t51150.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.color-scale/t51150");
});
clustermap.components.color_scale.t51150.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t51150.prototype.om$core$IRender$render$arity$1 = (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4268__auto__ = ((function (this__9486__auto____$1){
return (function iter__51153(s__51154){return (new cljs.core.LazySeq(null,((function (this__9486__auto____$1){
return (function (){var s__51154__$1 = s__51154;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51154__$1);if(temp__4126__auto__)
{var s__51154__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51154__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__51154__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__51156 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__51155 = (0);while(true){
if((i__51155 < size__4267__auto__))
{var vec__51159 = cljs.core._nth.call(null,c__4266__auto__,i__51155);var threshold = cljs.core.nth.call(null,vec__51159,(0),null);var color = cljs.core.nth.call(null,vec__51159,(1),null);cljs.core.chunk_append.call(null,b__51156,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__51161 = (i__51155 + (1));
i__51155 = G__51161;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51156),iter__51153.call(null,cljs.core.chunk_rest.call(null,s__51154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51156),null);
}
} else
{var vec__51160 = cljs.core.first.call(null,s__51154__$2);var threshold = cljs.core.nth.call(null,vec__51160,(0),null);var color = cljs.core.nth.call(null,vec__51160,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__51153.call(null,cljs.core.rest.call(null,s__51154__$2)));
}
} else
{return null;
}
break;
}
});})(this__9486__auto____$1))
,null,null));
});})(this__9486__auto____$1))
;return iter__4268__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t51150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51152){var self__ = this;
var _51152__$1 = this;return self__.meta51151;
});
clustermap.components.color_scale.t51150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51152,meta51151__$1){var self__ = this;
var _51152__$1 = this;return (new clustermap.components.color_scale.t51150(self__.owner,self__.threshold_colors,self__.color_scale_component,meta51151__$1));
});
clustermap.components.color_scale.__GT_t51150 = (function __GT_t51150(owner__$1,threshold_colors__$1,color_scale_component__$1,meta51151){return (new clustermap.components.color_scale.t51150(owner__$1,threshold_colors__$1,color_scale_component__$1,meta51151));
});
}
return (new clustermap.components.color_scale.t51150(owner,threshold_colors,color_scale_component,null));
});
clustermap.components.color_scale.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.color_scale.color_scale_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=color_scale.js.map