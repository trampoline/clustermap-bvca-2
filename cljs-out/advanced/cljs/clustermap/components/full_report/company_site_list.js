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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__38827){var map__38836 = p__38827;var map__38836__$1 = ((cljs.core.seq_QMARK_(map__38836))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38836):map__38836);var opts = map__38836__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,cljs.core.constant$keyword$889);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38836__$1,cljs.core.constant$keyword$890);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,investment__$1) : path_fn.call(null,cljs.core.constant$keyword$891,investment__$1));if(typeof clustermap.components.full_report.company_site_list.t38837 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t38837 = (function (company_path,link_fn,path_fn,opts,map__38836,p__38827,owner,investment,meta38838){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__38836 = map__38836;
this.p__38827 = p__38827;
this.owner = owner;
this.investment = investment;
this.meta38838 = meta38838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t38837.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t38837.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t38837";
clustermap.components.full_report.company_site_list.t38837.cljs$lang$ctorPrWriter = ((function (company_path,map__38836,map__38836__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t38837");
});})(company_path,map__38836,map__38836__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38837.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t38837.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__38836,map__38836__$1,opts,path_fn,link_fn){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs38840 = cljs.core.constant$keyword$903.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38840))?sablono.interpreter.attributes(attrs38840):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38840))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38840)], null))));
})(),(function (){var attrs38841 = cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38841))?sablono.interpreter.attributes(attrs38841):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38841))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38841)], null))));
})(),(function (){var attrs38842 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$905,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$836,cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$892,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$905,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$836,cljs.core.constant$keyword$906.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38842))?sablono.interpreter.attributes(attrs38842):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38842))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38842)], null))));
})(),(function (){var attrs38843 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$894,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$809,cljs.core.constant$keyword$809.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$810,cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)) : self__.link_fn.call(null,cljs.core.constant$keyword$894,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$809,cljs.core.constant$keyword$809.cljs$core$IFn$_invoke$arity$1(self__.investment),cljs.core.constant$keyword$810,cljs.core.constant$keyword$907.cljs$core$IFn$_invoke$arity$1(self__.investment)], null)));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs38843))?sablono.interpreter.attributes(attrs38843):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38843))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38843)], null))));
})());
});})(company_path,map__38836,map__38836__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__38836,map__38836__$1,opts,path_fn,link_fn){
return (function (_38839){var self__ = this;
var _38839__$1 = this;return self__.meta38838;
});})(company_path,map__38836,map__38836__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t38837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__38836,map__38836__$1,opts,path_fn,link_fn){
return (function (_38839,meta38838__$1){var self__ = this;
var _38839__$1 = this;return (new clustermap.components.full_report.company_site_list.t38837(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__38836,self__.p__38827,self__.owner,self__.investment,meta38838__$1));
});})(company_path,map__38836,map__38836__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t38837 = ((function (company_path,map__38836,map__38836__$1,opts,path_fn,link_fn){
return (function __GT_t38837(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38836__$2,p__38827__$1,owner__$1,investment__$2,meta38838){return (new clustermap.components.full_report.company_site_list.t38837(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__38836__$2,p__38827__$1,owner__$1,investment__$2,meta38838));
});})(company_path,map__38836,map__38836__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t38837(company_path,link_fn,path_fn,opts,map__38836__$1,p__38827,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$899);if(typeof clustermap.components.full_report.company_site_list.t38858 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t38858 = (function (comm,opts,owner,investments,company_site_list,meta38859){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta38859 = meta38859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t38858.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t38858.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t38858";
clustermap.components.full_report.company_site_list.t38858.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-site-list/t38858");
});})(comm))
;
clustermap.components.full_report.company_site_list.t38858.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t38858.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;var attrs38861 = clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$908);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38861))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs38861], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38861))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38862 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Investor-backed Company",cljs.core.constant$keyword$909);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38862))?sablono.interpreter.attributes(attrs38862):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38862))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38862)], null))));
})(),(function (){var attrs38863 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Postcode",cljs.core.constant$keyword$910);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38863))?sablono.interpreter.attributes(attrs38863):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38863))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38863)], null))));
})(),(function (){var attrs38864 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Investor",cljs.core.constant$keyword$800);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38864))?sablono.interpreter.attributes(attrs38864):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38864))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38864)], null))));
})(),(function (){var attrs38865 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Constituency",cljs.core.constant$keyword$799);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38865))?sablono.interpreter.attributes(attrs38865):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38865))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38865)], null))));
})())),(function (){var attrs38866 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,cljs.core.constant$keyword$911,cljs.core.constant$keyword$882,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38866))?sablono.interpreter.attributes(attrs38866):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38866))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38866)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$908))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38861),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs38867 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Investor-backed Company",cljs.core.constant$keyword$909);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38867))?sablono.interpreter.attributes(attrs38867):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38867))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38867)], null))));
})(),(function (){var attrs38868 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Postcode",cljs.core.constant$keyword$910);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38868))?sablono.interpreter.attributes(attrs38868):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38868))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38868)], null))));
})(),(function (){var attrs38869 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Investor",cljs.core.constant$keyword$800);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38869))?sablono.interpreter.attributes(attrs38869):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38869))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38869)], null))));
})(),(function (){var attrs38870 = clustermap.components.table.order_col(self__.comm,self__.investments,cljs.core.constant$keyword$908,"Constituency",cljs.core.constant$keyword$799);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs38870))?sablono.interpreter.attributes(attrs38870):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38870))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38870)], null))));
})())),(function (){var attrs38871 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_site_list.investment,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,cljs.core.constant$keyword$911,cljs.core.constant$keyword$882,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs38871))?sablono.interpreter.attributes(attrs38871):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38871))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38871)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.investments,cljs.core.constant$keyword$908))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t38858.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_38860){var self__ = this;
var _38860__$1 = this;return self__.meta38859;
});})(comm))
;
clustermap.components.full_report.company_site_list.t38858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_38860,meta38859__$1){var self__ = this;
var _38860__$1 = this;return (new clustermap.components.full_report.company_site_list.t38858(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta38859__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t38858 = ((function (comm){
return (function __GT_t38858(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta38859){return (new clustermap.components.full_report.company_site_list.t38858(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta38859));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t38858(comm,opts,owner,investments,company_site_list,null));
});
