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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__31882){var map__31884 = p__31882;var map__31884__$1 = ((cljs.core.seq_QMARK_.call(null,map__31884))?cljs.core.apply.call(null,cljs.core.hash_map,map__31884):map__31884);var opts = map__31884__$1;var y1_title = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"y1-title","y1-title",3377247893));var y0_title = cljs.core.get.call(null,map__31884__$1,new cljs.core.Keyword(null,"y0-title","y0-title",2489744212));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"time","time",1017464383),data);var y_total = cljs.core.map.call(null,new cljs.core.Keyword(null,"total","total",1124454070),data);var y_mean = cljs.core.map.call(null,new cljs.core.Keyword(null,"mean","mean",1017251639),data);var y_count = cljs.core.map.call(null,new cljs.core.Keyword(null,"count","count",1108755585),data);return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",1127031096),null], null),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",2310420878),x_labels,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",973603568),270], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y1_title], null),new cljs.core.Keyword(null,"opposite","opposite",826026585),true], null)], null),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),y0_title,new cljs.core.Keyword(null,"type","type",1017479852),"column",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_total], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),y1_title,new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),1,new cljs.core.Keyword(null,"data","data",1016980252),y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t31890 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t31890 = (function (opts,owner,data,timeline_chart,meta31891){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta31891 = meta31891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t31890.cljs$lang$type = true;
clustermap.components.timeline_chart.t31890.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t31890";
clustermap.components.timeline_chart.t31890.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.timeline-chart/t31890");
});
clustermap.components.timeline_chart.t31890.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t31890.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart.call(null,cljs.core.deref.call(null,self__.data),om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t31890.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t31890.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart.call(null,cljs.core.deref.call(null,self__.data),om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t31890.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t31890.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t31890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31892){var self__ = this;
var _31892__$1 = this;return self__.meta31891;
});
clustermap.components.timeline_chart.t31890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31892,meta31891__$1){var self__ = this;
var _31892__$1 = this;return (new clustermap.components.timeline_chart.t31890(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta31891__$1));
});
clustermap.components.timeline_chart.__GT_t31890 = (function __GT_t31890(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta31891){return (new clustermap.components.timeline_chart.t31890(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta31891));
});
}
return (new clustermap.components.timeline_chart.t31890(opts,owner,data,timeline_chart,null));
});
