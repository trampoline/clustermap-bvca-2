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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__37604){var map__37613 = p__37604;var map__37613__$1 = ((cljs.core.seq_QMARK_(map__37613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37613):map__37613);var opts = map__37613__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37613__$1,cljs.core.constant$keyword$893);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37613__$1,cljs.core.constant$keyword$894);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$895,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t37614 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t37614 = (function (company_path,link_fn,path_fn,opts,map__37613,p__37604,owner,investment,meta37615){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__37613 = map__37613;
this.p__37604 = p__37604;
this.owner = owner;
this.investment = investment;
this.meta37615 = meta37615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t37614.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t37614.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t37614";
clustermap.components.full_report.company_site_list.t37614.cljs$lang$ctorPrWriter = ((function (company_path,map__37613,map__37613__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t37614");
});})(company_path,map__37613,map__37613__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37614.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t37614.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__37613,map__37613__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs37617 = cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37617))?sablono.interpreter.attributes(attrs37617):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37617))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37617)], null))));
})(),(function (){var attrs37618 = cljs.core.constant$keyword$908.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37618))?sablono.interpreter.attributes(attrs37618):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37618))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37618)], null))));
})(),(function (){var attrs37619 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$896,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,cljs.core.constant$keyword$909.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$840,cljs.core.constant$keyword$910.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$896,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$909,cljs.core.constant$keyword$909.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$840,cljs.core.constant$keyword$910.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37619))?sablono.interpreter.attributes(attrs37619):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37619))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37619)], null))));
})(),(function (){var attrs37620 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$813,cljs.core.constant$keyword$813.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$814,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$898,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$813,cljs.core.constant$keyword$813.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$814,cljs.core.constant$keyword$911.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37620))?sablono.interpreter.attributes(attrs37620):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37620))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37620)], null))));
})());
});})(company_path,map__37613,map__37613__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__37613,map__37613__$1,opts,path_fn,link_fn){
return (function (_37616){var self__ = this;
var _37616__$1 = this;return self__.meta37615;
});})(company_path,map__37613,map__37613__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t37614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__37613,map__37613__$1,opts,path_fn,link_fn){
return (function (_37616,meta37615__$1){var self__ = this;
var _37616__$1 = this;return (new clustermap.components.full_report.company_site_list.t37614(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__37613,self__.p__37604,self__.owner,self__.investment,meta37615__$1));
});})(company_path,map__37613,map__37613__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t37614 = ((function (company_path,map__37613,map__37613__$1,opts,path_fn,link_fn){
return (function __GT_t37614(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37613__$2,p__37604__$1,owner__$1,investment__$2,meta37615){return (new clustermap.components.full_report.company_site_list.t37614(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37613__$2,p__37604__$1,owner__$1,investment__$2,meta37615));
});})(company_path,map__37613,map__37613__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t37614(company_path,link_fn,path_fn,opts,map__37613__$1,p__37604,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$903);if(typeof clustermap.components.full_report.company_site_list.t37635 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t37635 = (function (comm,opts,owner,investments,company_site_list,meta37636){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta37636 = meta37636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t37635.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t37635.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t37635";
clustermap.components.full_report.company_site_list.t37635.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t37635");
});})(comm))
;
clustermap.components.full_report.company_site_list.t37635.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t37635.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs37638 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$912);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37638))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs37638], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37638))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37639 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Investor-backed Company",cljs.core.constant$keyword$913);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37639))?sablono.interpreter.attributes(attrs37639):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37639))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37639)], null))));
})(),(function (){var attrs37640 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Postcode",cljs.core.constant$keyword$914);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37640))?sablono.interpreter.attributes(attrs37640):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37640))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37640)], null))));
})(),(function (){var attrs37641 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Investor",cljs.core.constant$keyword$805);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37641))?sablono.interpreter.attributes(attrs37641):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37641))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37641)], null))));
})(),(function (){var attrs37642 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Constituency",cljs.core.constant$keyword$804);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37642))?sablono.interpreter.attributes(attrs37642):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37642))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37642)], null))));
})())),(function (){var attrs37643 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,cljs.core.constant$keyword$915,cljs.core.constant$keyword$886,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37643))?sablono.interpreter.attributes(attrs37643):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37643))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37643)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$912))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37638),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37644 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Investor-backed Company",cljs.core.constant$keyword$913);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37644))?sablono.interpreter.attributes(attrs37644):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37644))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37644)], null))));
})(),(function (){var attrs37645 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Postcode",cljs.core.constant$keyword$914);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37645))?sablono.interpreter.attributes(attrs37645):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37645))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37645)], null))));
})(),(function (){var attrs37646 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Investor",cljs.core.constant$keyword$805);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37646))?sablono.interpreter.attributes(attrs37646):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37646))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37646)], null))));
})(),(function (){var attrs37647 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$912,"Constituency",cljs.core.constant$keyword$804);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37647))?sablono.interpreter.attributes(attrs37647):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37647))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37647)], null))));
})())),(function (){var attrs37648 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,cljs.core.constant$keyword$915,cljs.core.constant$keyword$886,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37648))?sablono.interpreter.attributes(attrs37648):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37648))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37648)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$912))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t37635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_37637){var self__ = this;
var _37637__$1 = this;return self__.meta37636;
});})(comm))
;
clustermap.components.full_report.company_site_list.t37635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_37637,meta37636__$1){var self__ = this;
var _37637__$1 = this;return (new clustermap.components.full_report.company_site_list.t37635(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta37636__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t37635 = ((function (comm){
return (function __GT_t37635(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta37636){return (new clustermap.components.full_report.company_site_list.t37635(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta37636));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t37635(comm,opts,owner,investments,company_site_list,null));
});
