// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$794,(function (){var G__34904 = site_stats;var G__34904__$1 = (((G__34904 == null))?null:cljs.core.constant$keyword$780.cljs$core$IFn$_invoke$arity$1(G__34904));return G__34904__$1;
})(),cljs.core.constant$keyword$795,(function (){var G__34905 = site_stats;var G__34905__$1 = (((G__34905 == null))?null:cljs.core.constant$keyword$777.cljs$core$IFn$_invoke$arity$1(G__34905));return G__34905__$1;
})(),cljs.core.constant$keyword$796,(function (){var G__34906 = site_stats;var G__34906__$1 = (((G__34906 == null))?null:cljs.core.constant$keyword$776.cljs$core$IFn$_invoke$arity$1(G__34906));return G__34906__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__34938 = clustermap.components.map_report.type_counts(site_stats);var map__34938__$1 = ((cljs.core.seq_QMARK_(map__34938))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34938):map__34938);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,cljs.core.constant$keyword$796);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,cljs.core.constant$keyword$795);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34938__$1,cljs.core.constant$keyword$794);if(typeof clustermap.components.map_report.t34939 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34939 = (function (pc_count,ic_count,const_count,map__34938,comm,site_stats,all_portfolio_companies_summary_report,meta34940){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34938 = map__34938;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta34940 = meta34940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34939.cljs$lang$type = true;
clustermap.components.map_report.t34939.cljs$lang$ctorStr = "clustermap.components.map-report/t34939";
clustermap.components.map_report.t34939.cljs$lang$ctorPrWriter = ((function (map__34938,map__34938__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t34939");
});})(map__34938,map__34938__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34939.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34939.prototype.om$core$IRender$render$arity$1 = ((function (map__34938,map__34938__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs34944 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34944))?sablono.interpreter.attributes(attrs34944):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34944))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34944),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs34949 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34949))?sablono.interpreter.attributes(attrs34949):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34949))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34949),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs34954 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34954))?sablono.interpreter.attributes(attrs34954):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34954))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs34955 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34955))?sablono.interpreter.attributes(attrs34955):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34955)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34954),(function (){var attrs34956 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs34956))?sablono.interpreter.attributes(attrs34956):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34956))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34956)], null))));
})()], null))));
})(),(function (){var attrs34957 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__34967 = self__.site_stats;var G__34967__$1 = (((G__34967 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__34967));var G__34967__$2 = (((G__34967__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__34967__$1));return G__34967__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__34967 = self__.site_stats;var G__34967__$1 = (((G__34967 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__34967));var G__34967__$2 = (((G__34967__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__34967__$1));return G__34967__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34957))?sablono.interpreter.attributes(attrs34957):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34957))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34957),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs34962 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__34968 = self__.site_stats;var G__34968__$1 = (((G__34968 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__34968));var G__34968__$2 = (((G__34968__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__34968__$1));return G__34968__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__34968 = self__.site_stats;var G__34968__$1 = (((G__34968 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__34968));var G__34968__$2 = (((G__34968__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__34968__$1));return G__34968__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs34962))?sablono.interpreter.attributes(attrs34962):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs34962))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs34962),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});})(map__34938,map__34938__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34939.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34938,map__34938__$1,const_count,ic_count,pc_count){
return (function (_34941){var self__ = this;
var _34941__$1 = this;return self__.meta34940;
});})(map__34938,map__34938__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34938,map__34938__$1,const_count,ic_count,pc_count){
return (function (_34941,meta34940__$1){var self__ = this;
var _34941__$1 = this;return (new clustermap.components.map_report.t34939(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34938,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta34940__$1));
});})(map__34938,map__34938__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34939 = ((function (map__34938,map__34938__$1,const_count,ic_count,pc_count){
return (function __GT_t34939(pc_count__$1,ic_count__$1,const_count__$1,map__34938__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34940){return (new clustermap.components.map_report.t34939(pc_count__$1,ic_count__$1,const_count__$1,map__34938__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta34940));
});})(map__34938,map__34938__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34939(pc_count,ic_count,const_count,map__34938__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__34994 = clustermap.components.map_report.type_counts(site_stats);var map__34994__$1 = ((cljs.core.seq_QMARK_(map__34994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34994):map__34994);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,cljs.core.constant$keyword$796);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,cljs.core.constant$keyword$795);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34994__$1,cljs.core.constant$keyword$794);if(typeof clustermap.components.map_report.t34995 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t34995 = (function (pc_count,ic_count,const_count,map__34994,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta34996){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__34994 = map__34994;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta34996 = meta34996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t34995.cljs$lang$type = true;
clustermap.components.map_report.t34995.cljs$lang$ctorStr = "clustermap.components.map-report/t34995";
clustermap.components.map_report.t34995.cljs$lang$ctorPrWriter = ((function (map__34994,map__34994__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t34995");
});})(map__34994,map__34994__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34995.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t34995.prototype.om$core$IRender$render$arity$1 = ((function (map__34994,map__34994__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs35000 = cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35000))?sablono.interpreter.attributes(attrs35000):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35000))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35000)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35001 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35001))?sablono.interpreter.attributes(attrs35001):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35001))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35002 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35002))?sablono.interpreter.attributes(attrs35002):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35002))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35002)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35001),(function (){var attrs35003 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35003))?sablono.interpreter.attributes(attrs35003):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35003))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35003)], null))));
})()], null))));
})(),(function (){var attrs35004 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35004))?sablono.interpreter.attributes(attrs35004):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35004))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35005 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35005))?sablono.interpreter.attributes(attrs35005):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35005))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35005)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35004),(function (){var attrs35006 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35006))?sablono.interpreter.attributes(attrs35006):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35006))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35006)], null))));
})()], null))));
})(),(function (){var attrs35007 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35017 = self__.site_stats;var G__35017__$1 = (((G__35017 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35017));var G__35017__$2 = (((G__35017__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35017__$1));return G__35017__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35017 = self__.site_stats;var G__35017__$1 = (((G__35017 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35017));var G__35017__$2 = (((G__35017__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35017__$1));return G__35017__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35007))?sablono.interpreter.attributes(attrs35007):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35007),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35012 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35018 = self__.site_stats;var G__35018__$1 = (((G__35018 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35018));var G__35018__$2 = (((G__35018__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35018__$1));return G__35018__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35018 = self__.site_stats;var G__35018__$1 = (((G__35018 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35018));var G__35018__$2 = (((G__35018__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35018__$1));return G__35018__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35012))?sablono.interpreter.attributes(attrs35012):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35012))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35012),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});})(map__34994,map__34994__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34995.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__34994,map__34994__$1,const_count,ic_count,pc_count){
return (function (_34997){var self__ = this;
var _34997__$1 = this;return self__.meta34996;
});})(map__34994,map__34994__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t34995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__34994,map__34994__$1,const_count,ic_count,pc_count){
return (function (_34997,meta34996__$1){var self__ = this;
var _34997__$1 = this;return (new clustermap.components.map_report.t34995(self__.pc_count,self__.ic_count,self__.const_count,self__.map__34994,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta34996__$1));
});})(map__34994,map__34994__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t34995 = ((function (map__34994,map__34994__$1,const_count,ic_count,pc_count){
return (function __GT_t34995(pc_count__$1,ic_count__$1,const_count__$1,map__34994__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34996){return (new clustermap.components.map_report.t34995(pc_count__$1,ic_count__$1,const_count__$1,map__34994__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta34996));
});})(map__34994,map__34994__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t34995(pc_count,ic_count,const_count,map__34994__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__35044 = clustermap.components.map_report.type_counts(site_stats);var map__35044__$1 = ((cljs.core.seq_QMARK_(map__35044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35044):map__35044);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35044__$1,cljs.core.constant$keyword$796);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35044__$1,cljs.core.constant$keyword$795);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35044__$1,cljs.core.constant$keyword$794);if(typeof clustermap.components.map_report.t35045 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35045 = (function (pc_count,ic_count,const_count,map__35044,path_fn,comm,site_stats,investor_company,investor_company_report,meta35046){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__35044 = map__35044;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta35046 = meta35046;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35045.cljs$lang$type = true;
clustermap.components.map_report.t35045.cljs$lang$ctorStr = "clustermap.components.map-report/t35045";
clustermap.components.map_report.t35045.cljs$lang$ctorPrWriter = ((function (map__35044,map__35044__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t35045");
});})(map__35044,map__35044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35045.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35045.prototype.om$core$IRender$render$arity$1 = ((function (map__35044,map__35044__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs35050 = cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35050))?sablono.interpreter.attributes(attrs35050):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35050))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35050)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35051 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35051))?sablono.interpreter.attributes(attrs35051):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35051))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35052 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35052))?sablono.interpreter.attributes(attrs35052):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35052))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35052)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35051),(function (){var attrs35053 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35053))?sablono.interpreter.attributes(attrs35053):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35053))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35053)], null))));
})()], null))));
})(),(function (){var attrs35054 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35054))?sablono.interpreter.attributes(attrs35054):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35054))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35055 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35055))?sablono.interpreter.attributes(attrs35055):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35055))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35055)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35054),(function (){var attrs35056 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35056))?sablono.interpreter.attributes(attrs35056):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35056))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35056)], null))));
})()], null))));
})(),(function (){var attrs35057 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35067 = self__.site_stats;var G__35067__$1 = (((G__35067 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35067));var G__35067__$2 = (((G__35067__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35067__$1));return G__35067__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35067 = self__.site_stats;var G__35067__$1 = (((G__35067 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35067));var G__35067__$2 = (((G__35067__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35067__$1));return G__35067__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35057))?sablono.interpreter.attributes(attrs35057):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35057))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35057),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35062 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35068 = self__.site_stats;var G__35068__$1 = (((G__35068 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35068));var G__35068__$2 = (((G__35068__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35068__$1));return G__35068__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35068 = self__.site_stats;var G__35068__$1 = (((G__35068 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35068));var G__35068__$2 = (((G__35068__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35068__$1));return G__35068__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35062))?sablono.interpreter.attributes(attrs35062):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35062))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35062),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});})(map__35044,map__35044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35045.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35044,map__35044__$1,const_count,ic_count,pc_count){
return (function (_35047){var self__ = this;
var _35047__$1 = this;return self__.meta35046;
});})(map__35044,map__35044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35044,map__35044__$1,const_count,ic_count,pc_count){
return (function (_35047,meta35046__$1){var self__ = this;
var _35047__$1 = this;return (new clustermap.components.map_report.t35045(self__.pc_count,self__.ic_count,self__.const_count,self__.map__35044,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta35046__$1));
});})(map__35044,map__35044__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35045 = ((function (map__35044,map__35044__$1,const_count,ic_count,pc_count){
return (function __GT_t35045(pc_count__$1,ic_count__$1,const_count__$1,map__35044__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta35046){return (new clustermap.components.map_report.t35045(pc_count__$1,ic_count__$1,const_count__$1,map__35044__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta35046));
});})(map__35044,map__35044__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35045(pc_count,ic_count,const_count,map__35044__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__35098 = clustermap.components.map_report.type_counts(site_stats);var map__35098__$1 = ((cljs.core.seq_QMARK_(map__35098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35098):map__35098);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,cljs.core.constant$keyword$796);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,cljs.core.constant$keyword$795);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35098__$1,cljs.core.constant$keyword$794);if(typeof clustermap.components.map_report.t35099 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t35099 = (function (pc_count,ic_count,const_count,map__35098,path_fn,comm,site_stats,constituency,constituency_report,meta35100){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__35098 = map__35098;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta35100 = meta35100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t35099.cljs$lang$type = true;
clustermap.components.map_report.t35099.cljs$lang$ctorStr = "clustermap.components.map-report/t35099";
clustermap.components.map_report.t35099.cljs$lang$ctorPrWriter = ((function (map__35098,map__35098__$1,const_count,ic_count,pc_count){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.map-report/t35099");
});})(map__35098,map__35098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35099.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t35099.prototype.om$core$IRender$render$arity$1 = ((function (map__35098,map__35098__$1,const_count,ic_count,pc_count){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs35104 = cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35104))?sablono.interpreter.attributes(attrs35104):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35104))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35104),React.DOM.br(null),(cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs35109 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35109))?sablono.interpreter.attributes(attrs35109):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35109))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35110 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35110))?sablono.interpreter.attributes(attrs35110):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35110)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35109),(function (){var attrs35111 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35111))?sablono.interpreter.attributes(attrs35111):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35111))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35111)], null))));
})()], null))));
})(),(function (){var attrs35112 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35112))?sablono.interpreter.attributes(attrs35112):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35112))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs35113 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35113))?sablono.interpreter.attributes(attrs35113):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35113))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35113)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35112),(function (){var attrs35114 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.small,((cljs.core.map_QMARK_(attrs35114))?sablono.interpreter.attributes(attrs35114):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35114))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35114)], null))));
})()], null))));
})(),(function (){var attrs35115 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__35125 = self__.site_stats;var G__35125__$1 = (((G__35125 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35125));var G__35125__$2 = (((G__35125__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35125__$1));return G__35125__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__35125 = self__.site_stats;var G__35125__$1 = (((G__35125 == null))?null:cljs.core.constant$keyword$760.cljs$core$IFn$_invoke$arity$1(G__35125));var G__35125__$2 = (((G__35125__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35125__$1));return G__35125__$2;
})(),cljs.core.constant$keyword$622,2,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35115))?sablono.interpreter.attributes(attrs35115):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35115))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35115),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs35120 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__35126 = self__.site_stats;var G__35126__$1 = (((G__35126 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35126));var G__35126__$2 = (((G__35126__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35126__$1));return G__35126__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__35126 = self__.site_stats;var G__35126__$1 = (((G__35126 == null))?null:cljs.core.constant$keyword$775.cljs$core$IFn$_invoke$arity$1(G__35126));var G__35126__$2 = (((G__35126__$1 == null))?null:cljs.core.constant$keyword$738.cljs$core$IFn$_invoke$arity$1(G__35126__$1));return G__35126__$2;
})(),cljs.core.constant$keyword$624,0,cljs.core.constant$keyword$579,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs35120))?sablono.interpreter.attributes(attrs35120):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35120),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});})(map__35098,map__35098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35098,map__35098__$1,const_count,ic_count,pc_count){
return (function (_35101){var self__ = this;
var _35101__$1 = this;return self__.meta35100;
});})(map__35098,map__35098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t35099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35098,map__35098__$1,const_count,ic_count,pc_count){
return (function (_35101,meta35100__$1){var self__ = this;
var _35101__$1 = this;return (new clustermap.components.map_report.t35099(self__.pc_count,self__.ic_count,self__.const_count,self__.map__35098,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta35100__$1));
});})(map__35098,map__35098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t35099 = ((function (map__35098,map__35098__$1,const_count,ic_count,pc_count){
return (function __GT_t35099(pc_count__$1,ic_count__$1,const_count__$1,map__35098__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta35100){return (new clustermap.components.map_report.t35099(pc_count__$1,ic_count__$1,const_count__$1,map__35098__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta35100));
});})(map__35098,map__35098__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t35099(pc_count,ic_count,const_count,map__35098__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__35131 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35131__$1 = ((cljs.core.seq_QMARK_(map__35131))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35131):map__35131);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,cljs.core.constant$keyword$696);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35131__$1,cljs.core.constant$keyword$707);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$799);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$761,cljs.core.constant$keyword$612], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$761,cljs.core.constant$keyword$583], null));var site_stats = cljs.core.constant$keyword$765.cljs$core$IFn$_invoke$arity$1(data);var pred__35132 = cljs.core._EQ__EQ_;var expr__35133 = type;if(cljs.core.truth_((pred__35132.cljs$core$IFn$_invoke$arity$2 ? pred__35132.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,expr__35133) : pred__35132.call(null,cljs.core.constant$keyword$698,expr__35133))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__35132.cljs$core$IFn$_invoke$arity$2 ? pred__35132.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$699,expr__35133) : pred__35132.call(null,cljs.core.constant$keyword$699,expr__35133))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__35132.cljs$core$IFn$_invoke$arity$2 ? pred__35132.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35133) : pred__35132.call(null,cljs.core.constant$keyword$701,expr__35133))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$691,shared,cljs.core.constant$keyword$694,document.getElementById(elem_id)], null));
});
