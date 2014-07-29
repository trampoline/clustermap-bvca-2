// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__37502){var map__37511 = p__37502;var map__37511__$1 = ((cljs.core.seq_QMARK_(map__37511))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37511):map__37511);var opts = map__37511__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37511__$1,cljs.core.constant$keyword$899);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37511__$1,cljs.core.constant$keyword$900);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$901,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$901,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t37512 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t37512 = (function (company_path,link_fn,path_fn,opts,map__37511,p__37502,owner,investment,meta37513){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__37511 = map__37511;
this.p__37502 = p__37502;
this.owner = owner;
this.investment = investment;
this.meta37513 = meta37513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t37512.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t37512.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t37512";
clustermap.components.full_report.company_site_list.t37512.cljs$lang$ctorPrWriter = ((function (company_path,map__37511,map__37511__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t37512");
});})(company_path,map__37511,map__37511__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37512.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t37512.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__37511,map__37511__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs37515 = cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37515))?sablono.interpreter.attributes(attrs37515):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37515))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37515)], null))));
})(),(function (){var attrs37516 = cljs.core.constant$keyword$914.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37516))?sablono.interpreter.attributes(attrs37516):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37516))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37516)], null))));
})(),(function (){var attrs37517 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$902,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,cljs.core.constant$keyword$915.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$846,cljs.core.constant$keyword$916.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$902,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$915,cljs.core.constant$keyword$915.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$846,cljs.core.constant$keyword$916.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37517))?sablono.interpreter.attributes(attrs37517):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37517))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37517)], null))));
})(),(function (){var attrs37518 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$904,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$819,cljs.core.constant$keyword$819.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$820,cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$904,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$819,cljs.core.constant$keyword$819.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$820,cljs.core.constant$keyword$917.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37518))?sablono.interpreter.attributes(attrs37518):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37518))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37518)], null))));
})());
});})(company_path,map__37511,map__37511__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__37511,map__37511__$1,opts,path_fn,link_fn){
return (function (_37514){var self__ = this;
var _37514__$1 = this;return self__.meta37513;
});})(company_path,map__37511,map__37511__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__37511,map__37511__$1,opts,path_fn,link_fn){
return (function (_37514,meta37513__$1){var self__ = this;
var _37514__$1 = this;return (new clustermap.components.full_report.company_site_list.t37512(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__37511,self__.p__37502,self__.owner,self__.investment,meta37513__$1));
});})(company_path,map__37511,map__37511__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t37512 = ((function (company_path,map__37511,map__37511__$1,opts,path_fn,link_fn){
return (function __GT_t37512(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37511__$2,p__37502__$1,owner__$1,investment__$2,meta37513){return (new clustermap.components.full_report.company_site_list.t37512(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37511__$2,p__37502__$1,owner__$1,investment__$2,meta37513));
});})(company_path,map__37511,map__37511__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t37512(company_path,link_fn,path_fn,opts,map__37511__$1,p__37502,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$909);if(typeof clustermap.components.full_report.company_site_list.t37533 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t37533 = (function (comm,opts,owner,investments,company_site_list,meta37534){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta37534 = meta37534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t37533.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t37533.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t37533";
clustermap.components.full_report.company_site_list.t37533.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t37533");
});})(comm))
;
clustermap.components.full_report.company_site_list.t37533.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t37533.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs37536 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$918);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37536))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs37536], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37536))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37537 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Investor-backed Company",cljs.core.constant$keyword$919);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37537))?sablono.interpreter.attributes(attrs37537):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37537))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37537)], null))));
})(),(function (){var attrs37538 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Postcode",cljs.core.constant$keyword$920);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37538))?sablono.interpreter.attributes(attrs37538):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37538))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37538)], null))));
})(),(function (){var attrs37539 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Investor",cljs.core.constant$keyword$811);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37539))?sablono.interpreter.attributes(attrs37539):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37539))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37539)], null))));
})(),(function (){var attrs37540 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Constituency",cljs.core.constant$keyword$810);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37540))?sablono.interpreter.attributes(attrs37540):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37540))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37540)], null))));
})())),(function (){var attrs37541 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,cljs.core.constant$keyword$921,cljs.core.constant$keyword$892,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37541))?sablono.interpreter.attributes(attrs37541):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37541))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37541)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$918))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37536),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37542 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Investor-backed Company",cljs.core.constant$keyword$919);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37542))?sablono.interpreter.attributes(attrs37542):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37542))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37542)], null))));
})(),(function (){var attrs37543 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Postcode",cljs.core.constant$keyword$920);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37543))?sablono.interpreter.attributes(attrs37543):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37543))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37543)], null))));
})(),(function (){var attrs37544 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Investor",cljs.core.constant$keyword$811);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37544))?sablono.interpreter.attributes(attrs37544):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37544))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37544)], null))));
})(),(function (){var attrs37545 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$918,"Constituency",cljs.core.constant$keyword$810);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37545))?sablono.interpreter.attributes(attrs37545):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37545))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37545)], null))));
})())),(function (){var attrs37546 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$889,cljs.core.constant$keyword$921,cljs.core.constant$keyword$892,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37546))?sablono.interpreter.attributes(attrs37546):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37546))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37546)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$918))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t37533.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_37535){var self__ = this;
var _37535__$1 = this;return self__.meta37534;
});})(comm))
;
clustermap.components.full_report.company_site_list.t37533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_37535,meta37534__$1){var self__ = this;
var _37535__$1 = this;return (new clustermap.components.full_report.company_site_list.t37533(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta37534__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t37533 = ((function (comm){
return (function __GT_t37533(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta37534){return (new clustermap.components.full_report.company_site_list.t37533(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta37534));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t37533(comm,opts,owner,investments,company_site_list,null));
});
