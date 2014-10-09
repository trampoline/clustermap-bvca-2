// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs45975 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs45975))?sablono.interpreter.attributes(attrs45975):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs45975))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs45975),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{return null;

}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__45984){var map__45997 = p__45984;var map__45997__$1 = ((cljs.core.seq_QMARK_(map__45997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45997):map__45997);var opts = map__45997__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45997__$1,cljs.core.constant$keyword$1135);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45997__$1,cljs.core.constant$keyword$1136);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1137,company) : path_fn.call(null,cljs.core.constant$keyword$1137,company));if(typeof clustermap.components.full_report.company_list.t45998 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t45998 = (function (company_path,link_fn,path_fn,opts,map__45997,p__45984,owner,company,portfolio_company,meta45999){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__45997 = map__45997;
this.p__45984 = p__45984;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta45999 = meta45999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t45998.cljs$lang$type = true;
clustermap.components.full_report.company_list.t45998.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t45998";
clustermap.components.full_report.company_list.t45998.cljs$lang$ctorPrWriter = ((function (company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t45998");
});})(company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45998.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t45998.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs46001 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1137,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$1137,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46001))?sablono.interpreter.attributes(attrs46001):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46001))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46001)], null))));
})(),(function (){var attrs46002 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1138,cljs.core.constant$keyword$1139.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46002))?sablono.interpreter.attributes(attrs46002):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46002))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46002)], null))));
})(),(function (){var attrs46003 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1140,(function (){var G__46008 = self__.company;var G__46008__$1 = (((G__46008 == null))?null:cljs.core.constant$keyword$971.cljs$core$IFn$_invoke$arity$1(G__46008));var G__46008__$2 = (((G__46008__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__46008,G__46008__$1,this__9504__auto____$1,company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1141.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__46008,G__46008__$1,this__9504__auto____$1,company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
,G__46008__$1));return G__46008__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46003))?sablono.interpreter.attributes(attrs46003):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46003))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46003)], null))));
})(),(function (){var attrs46004 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1142.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1142.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46004))?sablono.interpreter.attributes(attrs46004):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46004))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46004),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs46005 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1144.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46005))?sablono.interpreter.attributes(attrs46005):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46005))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46005)], null))));
})(),(function (){var attrs46006 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1144.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1144.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46006))?sablono.interpreter.attributes(attrs46006):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46006))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46006)], null))));
})(),(function (){var attrs46007 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1145.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$986,(0),cljs.core.constant$keyword$927,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$1145.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$986,(0),cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs46007))?sablono.interpreter.attributes(attrs46007):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46007),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function (_46000){var self__ = this;
var _46000__$1 = this;return self__.meta45999;
});})(company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t45998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function (_46000,meta45999__$1){var self__ = this;
var _46000__$1 = this;return (new clustermap.components.full_report.company_list.t45998(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__45997,self__.p__45984,self__.owner,self__.company,self__.portfolio_company,meta45999__$1));
});})(company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t45998 = ((function (company_path,map__45997,map__45997__$1,opts,path_fn,link_fn){
return (function __GT_t45998(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45997__$2,p__45984__$1,owner__$1,company__$1,portfolio_company__$1,meta45999){return (new clustermap.components.full_report.company_list.t45998(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45997__$2,p__45984__$1,owner__$1,company__$1,portfolio_company__$1,meta45999));
});})(company_path,map__45997,map__45997__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t45998(company_path,link_fn,path_fn,opts,map__45997__$1,p__45984,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1146);if(typeof clustermap.components.full_report.company_list.t46029 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t46029 = (function (comm,opts,owner,companies,company_list,meta46030){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta46030 = meta46030;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t46029.cljs$lang$type = true;
clustermap.components.full_report.company_list.t46029.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t46029";
clustermap.components.full_report.company_list.t46029.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t46029");
});})(comm))
;
clustermap.components.full_report.company_list.t46029.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t46029.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs46032 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1147);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs46032))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1049,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs46032], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46032))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs46033 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Investor-backed company",cljs.core.constant$keyword$998);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46033))?sablono.interpreter.attributes(attrs46033):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46033))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46033)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs46038 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Revenue",cljs.core.constant$keyword$1142);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46038))?sablono.interpreter.attributes(attrs46038):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46038))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46038)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Rev. change",cljs.core.constant$keyword$1144))),(function (){var attrs46039 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Employees",cljs.core.constant$keyword$1145);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46039))?sablono.interpreter.attributes(attrs46039):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46039))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46039)], null))));
})())),(function (){var attrs46040 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1148.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1149,cljs.core.constant$keyword$1042,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46040))?sablono.interpreter.attributes(attrs46040):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46040))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46040)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1147))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46032),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs46041 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Investor-backed company",cljs.core.constant$keyword$998);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46041))?sablono.interpreter.attributes(attrs46041):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46041))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46041)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs46046 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Revenue",cljs.core.constant$keyword$1142);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46046))?sablono.interpreter.attributes(attrs46046):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46046))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46046)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Rev. change",cljs.core.constant$keyword$1144))),(function (){var attrs46047 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1147,"Employees",cljs.core.constant$keyword$1145);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs46047))?sablono.interpreter.attributes(attrs46047):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46047))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46047)], null))));
})())),(function (){var attrs46048 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1148.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1010,cljs.core.constant$keyword$1149,cljs.core.constant$keyword$1042,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs46048))?sablono.interpreter.attributes(attrs46048):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46048))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46048)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1147))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t46029.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_46031){var self__ = this;
var _46031__$1 = this;return self__.meta46030;
});})(comm))
;
clustermap.components.full_report.company_list.t46029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_46031,meta46030__$1){var self__ = this;
var _46031__$1 = this;return (new clustermap.components.full_report.company_list.t46029(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta46030__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t46029 = ((function (comm){
return (function __GT_t46029(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta46030){return (new clustermap.components.full_report.company_list.t46029(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta46030));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t46029(comm,opts,owner,companies,company_list,null));
});
