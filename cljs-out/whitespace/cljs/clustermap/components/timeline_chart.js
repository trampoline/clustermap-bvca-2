// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__31259){var map__31261 = p__31259;var map__31261__$1 = ((cljs.core.seq_QMARK_.call(null,map__31261))?cljs.core.apply.call(null,cljs.core.hash_map,map__31261):map__31261);var opts = map__31261__$1;var y1_title = cljs.core.get.call(null,map__31261__$1,new cljs.core.Keyword(null,"y1-title","y1-title",3377247893));var y0_title = cljs.core.get.call(null,map__31261__$1,new cljs.core.Keyword(null,"y0-title","y0-title",2489744212));console.log(cljs.core.clj__GT_js.call(null,opts));
var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1017464383),data);var y_total = cljs.core.map.call(null,new cljs.core.Keyword(null,"total","total",1124454070),data);var y_mean = cljs.core.map.call(null,new cljs.core.Keyword(null,"mean","mean",1017251639),data);var y_count = cljs.core.map.call(null,new cljs.core.Keyword(null,"count","count",1108755585),data);return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",2310420878),x_labels,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",973603568),270], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y1_title], null),new cljs.core.Keyword(null,"opposite","opposite",826026585),true], null)], null),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),y0_title,new cljs.core.Keyword(null,"type","type",1017479852),"column",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_total], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),y1_title,new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),1,new cljs.core.Keyword(null,"data","data",1016980252),y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OPTS:",opts], null)));
if(typeof clustermap.components.timeline_chart.t31269 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t31269 = (function (opts,owner,data,timeline_chart,meta31270){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta31270 = meta31270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t31269.cljs$lang$type = true;
clustermap.components.timeline_chart.t31269.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t31269";
clustermap.components.timeline_chart.t31269.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.timeline-chart/t31269");
});
clustermap.components.timeline_chart.t31269.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t31269.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart.call(null,cljs.core.deref.call(null,self__.data),om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t31269.prototype.om$core$IRenderState$ = true;
clustermap.components.timeline_chart.t31269.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__31272){var self__ = this;
var map__31273 = p__31272;var map__31273__$1 = ((cljs.core.seq_QMARK_.call(null,map__31273))?cljs.core.apply.call(null,cljs.core.hash_map,map__31273):map__31273);var rendered_data = cljs.core.get.call(null,map__31273__$1,new cljs.core.Keyword(null,"rendered-data","rendered-data",809233716));var this$__$1 = this;var new_data_31276 = cljs.core.deref.call(null,self__.data);if(cljs.core._EQ_.call(null,rendered_data,new_data_31276))
{} else
{om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"rendered-data","rendered-data",809233716),new_data_31276);
}
return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t31269.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31271){var self__ = this;
var _31271__$1 = this;return self__.meta31270;
});
clustermap.components.timeline_chart.t31269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31271,meta31270__$1){var self__ = this;
var _31271__$1 = this;return (new clustermap.components.timeline_chart.t31269(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta31270__$1));
});
clustermap.components.timeline_chart.__GT_t31269 = (function __GT_t31269(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta31270){return (new clustermap.components.timeline_chart.t31269(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta31270));
});
}
return (new clustermap.components.timeline_chart.t31269(opts,owner,data,timeline_chart,null));
});
