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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__38814){var map__38823 = p__38814;var map__38823__$1 = ((cljs.core.seq_QMARK_(map__38823))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38823):map__38823);var opts = map__38823__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823__$1,cljs.core.constant$keyword$888);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823__$1,cljs.core.constant$keyword$889);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$890,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t38824 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t38824 = (function (company_path,link_fn,path_fn,opts,map__38823,p__38814,owner,investment,meta38825){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38823 = map__38823;
this.p__38814 = p__38814;
this.owner = owner;
this.investment = investment;
this.meta38825 = meta38825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t38824.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t38824.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t38824";
clustermap.components.full_report.company_site_list.t38824.cljs$lang$ctorPrWriter = ((function (company_path,map__38823,map__38823__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t38824");
});})(company_path,map__38823,map__38823__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38824.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t38824.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38823,map__38823__$1,opts,path_fn,link_fn){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38827 = cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38827))?sablono.interpreter.attributes(attrs38827):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38827))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38827)], null))));
})(),(function (){var attrs38828 = cljs.core.constant$keyword$903.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38828))?sablono.interpreter.attributes(attrs38828):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38828))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38828)], null))));
})(),(function (){var attrs38829 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$835,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$891,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$835,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38829))?sablono.interpreter.attributes(attrs38829):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38829))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38829)], null))));
})(),(function (){var attrs38830 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$893,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$809,cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$893,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$808,cljs.core.constant$keyword$808.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$809,cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38830))?sablono.interpreter.attributes(attrs38830):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38830))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38830)], null))));
})());
});})(company_path,map__38823,map__38823__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38824.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38823,map__38823__$1,opts,path_fn,link_fn){
return (function (_38826){var self__ = this;
var _38826__$1 = this;return self__.meta38825;
});})(company_path,map__38823,map__38823__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38823,map__38823__$1,opts,path_fn,link_fn){
return (function (_38826,meta38825__$1){var self__ = this;
var _38826__$1 = this;return (new clustermap.components.full_report.company_site_list.t38824(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38823,self__.p__38814,self__.owner,self__.investment,meta38825__$1));
});})(company_path,map__38823,map__38823__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t38824 = ((function (company_path,map__38823,map__38823__$1,opts,path_fn,link_fn){
return (function __GT_t38824(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38823__$2,p__38814__$1,owner__$1,investment__$2,meta38825){return (new clustermap.components.full_report.company_site_list.t38824(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38823__$2,p__38814__$1,owner__$1,investment__$2,meta38825));
});})(company_path,map__38823,map__38823__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t38824(company_path,link_fn,path_fn,opts,map__38823__$1,p__38814,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$898);if(typeof clustermap.components.full_report.company_site_list.t38845 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t38845 = (function (comm,opts,owner,investments,company_site_list,meta38846){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta38846 = meta38846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t38845.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t38845.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t38845";
clustermap.components.full_report.company_site_list.t38845.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t38845");
});})(comm))
;
clustermap.components.full_report.company_site_list.t38845.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t38845.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;var attrs38848 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$907);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38848))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$818,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38848], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38848))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38849 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Investor-backed Company",cljs.core.constant$keyword$908);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38849))?sablono.interpreter.attributes(attrs38849):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38849))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38849)], null))));
})(),(function (){var attrs38850 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Postcode",cljs.core.constant$keyword$909);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38850))?sablono.interpreter.attributes(attrs38850):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38850))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38850)], null))));
})(),(function (){var attrs38851 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Investor",cljs.core.constant$keyword$799);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38851))?sablono.interpreter.attributes(attrs38851):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38851))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38851)], null))));
})(),(function (){var attrs38852 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Constituency",cljs.core.constant$keyword$798);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38852))?sablono.interpreter.attributes(attrs38852):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38852))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38852)], null))));
})())),(function (){var attrs38853 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$878,cljs.core.constant$keyword$910,cljs.core.constant$keyword$881,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38853))?sablono.interpreter.attributes(attrs38853):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38853))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38853)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$907))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38848),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38854 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Investor-backed Company",cljs.core.constant$keyword$908);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38854))?sablono.interpreter.attributes(attrs38854):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38854))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38854)], null))));
})(),(function (){var attrs38855 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Postcode",cljs.core.constant$keyword$909);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38855))?sablono.interpreter.attributes(attrs38855):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38855))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38855)], null))));
})(),(function (){var attrs38856 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Investor",cljs.core.constant$keyword$799);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38856))?sablono.interpreter.attributes(attrs38856):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38856))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38856)], null))));
})(),(function (){var attrs38857 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$907,"Constituency",cljs.core.constant$keyword$798);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38857))?sablono.interpreter.attributes(attrs38857):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38857))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38857)], null))));
})())),(function (){var attrs38858 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$878,cljs.core.constant$keyword$910,cljs.core.constant$keyword$881,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38858))?sablono.interpreter.attributes(attrs38858):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38858))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38858)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$907))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t38845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38847){var self__ = this;
var _38847__$1 = this;return self__.meta38846;
});})(comm))
;
clustermap.components.full_report.company_site_list.t38845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38847,meta38846__$1){var self__ = this;
var _38847__$1 = this;return (new clustermap.components.full_report.company_site_list.t38845(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta38846__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t38845 = ((function (comm){
return (function __GT_t38845(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta38846){return (new clustermap.components.full_report.company_site_list.t38845(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta38846));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t38845(comm,opts,owner,investments,company_site_list,null));
});
