// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__12840){var map__12842 = p__12840;var map__12842__$1 = ((cljs.core.seq_QMARK_.call(null,map__12842))?cljs.core.apply.call(null,cljs.core.hash_map,map__12842):map__12842);var opts = map__12842__$1;var y1_title = cljs.core.get.call(null,map__12842__$1,new cljs.core.Keyword(null,"y1-title","y1-title",3377247893));var y0_title = cljs.core.get.call(null,map__12842__$1,new cljs.core.Keyword(null,"y0-title","y0-title",2489744212));var x_labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"date","date",1016980256),data);var stats = cljs.core.map.call(null,new cljs.core.Keyword(null,"stats","stats",1123661841),data);var y_median = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats){
return (function (p1__12836_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__12836_SHARP_,0);
});})(x_labels,stats))
,((function (x_labels,stats){
return (function (p1__12837_SHARP_){return cljs.core.get_in.call(null,p1__12837_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"median","median",4230840444)], null));
});})(x_labels,stats))
),data);var y_mean = cljs.core.map.call(null,cljs.core.comp.call(null,((function (x_labels,stats,y_median){
return (function (p1__12838_SHARP_){return clustermap.formats.number.round_decimal.call(null,p1__12838_SHARP_,0);
});})(x_labels,stats,y_median))
,((function (x_labels,stats,y_median){
return (function (p1__12839_SHARP_){return cljs.core.get_in.call(null,p1__12839_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats","stats",1123661841),new cljs.core.Keyword(null,"mean","mean",1017251639)], null));
});})(x_labels,stats,y_median))
),data);return jayq.core.$.call(null,node).highcharts(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chart","chart",1108527952),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",1127031096),null,new cljs.core.Keyword(null,"height","height",4087841945),300], null),new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),null], null),new cljs.core.Keyword(null,"xAxis","xAxis",1126781867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"categories","categories",2310420878),x_labels,new cljs.core.Keyword(null,"labels","labels",4198454129),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",973603568),270], null)], null),new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",1124275658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",1017460895),y0_title], null),new cljs.core.Keyword(null,"min","min",1014012356),0], null)], null),new cljs.core.Keyword(null,"series","series",4403032553),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),new cljs.core.Keyword(null,"type","type",1017479852),"line",new cljs.core.Keyword(null,"yAxis","yAxis",1127705388),0,new cljs.core.Keyword(null,"data","data",1016980252),y_mean], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__12843){var map__12848 = p__12843;var map__12848__$1 = ((cljs.core.seq_QMARK_.call(null,map__12848))?cljs.core.apply.call(null,cljs.core.hash_map,map__12848):map__12848);var opts = map__12848__$1;var id = cljs.core.get.call(null,map__12848__$1,new cljs.core.Keyword(null,"id","id",1013907597));if(typeof clustermap.components.timeline_chart.t12849 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t12849 = (function (id,opts,map__12848,p__12843,owner,data,timeline_chart,meta12850){
this.id = id;
this.opts = opts;
this.map__12848 = map__12848;
this.p__12843 = p__12843;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta12850 = meta12850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t12849.cljs$lang$type = true;
clustermap.components.timeline_chart.t12849.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t12849";
clustermap.components.timeline_chart.t12849.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.timeline-chart/t12849");
});
clustermap.components.timeline_chart.t12849.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t12849.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.call(null,self__.owner);return clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t12849.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t12849.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.call(null,self__.owner);clustermap.components.timeline_chart.create_chart.call(null,self__.data,om.core.get_node.call(null,self__.owner,"chart"),self__.opts);
return jayq.core.$.call(null,document).on("clustermap-change-view",(function (e){var chart = jayq.core.$.call(null,om.core.get_node.call(null,self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
}));
});
clustermap.components.timeline_chart.t12849.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t12849.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t12849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12851){var self__ = this;
var _12851__$1 = this;return self__.meta12850;
});
clustermap.components.timeline_chart.t12849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12851,meta12850__$1){var self__ = this;
var _12851__$1 = this;return (new clustermap.components.timeline_chart.t12849(self__.id,self__.opts,self__.map__12848,self__.p__12843,self__.owner,self__.data,self__.timeline_chart,meta12850__$1));
});
clustermap.components.timeline_chart.__GT_t12849 = (function __GT_t12849(id__$1,opts__$1,map__12848__$2,p__12843__$1,owner__$1,data__$1,timeline_chart__$1,meta12850){return (new clustermap.components.timeline_chart.t12849(id__$1,opts__$1,map__12848__$2,p__12843__$1,owner__$1,data__$1,timeline_chart__$1,meta12850));
});
}
return (new clustermap.components.timeline_chart.t12849(id,opts,map__12848__$1,p__12843,owner,data,timeline_chart,null));
});
