// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.map_report.widget = (function widget(data){if(typeof clustermap.map_report.t15684 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t15684 = (function (data,widget,meta15685){
this.data = data;
this.widget = widget;
this.meta15685 = meta15685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t15684.cljs$lang$type = true;
clustermap.map_report.t15684.cljs$lang$ctorStr = "clustermap.map-report/t15684";
clustermap.map_report.t15684.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t15684");
});
clustermap.map_report.t15684.prototype.om$core$IRender$ = true;
clustermap.map_report.t15684.prototype.om$core$IRender$render$arity$1 = (function (this__10375__auto__){var self__ = this;
var this__10375__auto____$1 = this;var attrs15687 = new cljs.core.Keyword(null,"message","message",1968829305).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.map_QMARK_.call(null,attrs15687))
{return React.DOM.div(sablono.render.render_attrs.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs15687)),null);
} else
{return React.DOM.div({},sablono.render.render_html.call(null,attrs15687));
}
});
clustermap.map_report.t15684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15686){var self__ = this;
var _15686__$1 = this;return self__.meta15685;
});
clustermap.map_report.t15684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15686,meta15685__$1){var self__ = this;
var _15686__$1 = this;return (new clustermap.map_report.t15684(self__.data,self__.widget,meta15685__$1));
});
clustermap.map_report.__GT_t15684 = (function __GT_t15684(data__$1,widget__$1,meta15685){return (new clustermap.map_report.t15684(data__$1,widget__$1,meta15685));
});
}
return (new clustermap.map_report.t15684(data,widget,null));
});
clustermap.map_report.app = cljs.core.atom.call(null,null);
clustermap.map_report.mount = (function mount(state){return om.core.root.call(null,state,clustermap.map_report.widget,document.getElementById("map-report"));
});

//# sourceMappingURL=map_report.js.map