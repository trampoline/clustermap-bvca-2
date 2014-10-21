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
{var attrs43884 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43884))?sablono.interpreter.attributes(attrs43884):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43884))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43884),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__43893){var map__43906 = p__43893;var map__43906__$1 = ((cljs.core.seq_QMARK_(map__43906))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43906):map__43906);var opts = map__43906__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43906__$1,cljs.core.constant$keyword$1466);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43906__$1,cljs.core.constant$keyword$1467);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1256,company) : path_fn.call(null,cljs.core.constant$keyword$1256,company));if(typeof clustermap.components.full_report.company_list.t43907 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t43907 = (function (company_path,link_fn,path_fn,opts,map__43906,p__43893,owner,company,portfolio_company,meta43908){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__43906 = map__43906;
this.p__43893 = p__43893;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta43908 = meta43908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t43907.cljs$lang$type = true;
clustermap.components.full_report.company_list.t43907.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t43907";
clustermap.components.full_report.company_list.t43907.cljs$lang$ctorPrWriter = ((function (company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t43907");
});})(company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t43907.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t43907.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs43910 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1256,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$1256,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43910))?sablono.interpreter.attributes(attrs43910):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43910))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43910)], null))));
})(),(function (){var attrs43911 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1257,cljs.core.constant$keyword$1468.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43911))?sablono.interpreter.attributes(attrs43911):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43911))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43911)], null))));
})(),(function (){var attrs43912 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$1258,(function (){var G__43917 = self__.company;var G__43917__$1 = (((G__43917 == null))?null:cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(G__43917));var G__43917__$2 = (((G__43917__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__43917,G__43917__$1,this__9504__auto____$1,company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$1469.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__43917,G__43917__$1,this__9504__auto____$1,company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
,G__43917__$1));return G__43917__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43912))?sablono.interpreter.attributes(attrs43912):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43912))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43912)], null))));
})(),(function (){var attrs43913 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1470.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1470.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43913))?sablono.interpreter.attributes(attrs43913):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43913))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1471.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43913),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1471.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs43914 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$1472.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43914))?sablono.interpreter.attributes(attrs43914):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43914))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43914)], null))));
})(),(function (){var attrs43915 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1472.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$1472.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43915))?sablono.interpreter.attributes(attrs43915):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43915))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43915)], null))));
})(),(function (){var attrs43916 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$1473.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$1473.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs43916))?sablono.interpreter.attributes(attrs43916):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43916))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1471.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43916),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3558__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$1471.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t43907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function (_43909){var self__ = this;
var _43909__$1 = this;return self__.meta43908;
});})(company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t43907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function (_43909,meta43908__$1){var self__ = this;
var _43909__$1 = this;return (new clustermap.components.full_report.company_list.t43907(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__43906,self__.p__43893,self__.owner,self__.company,self__.portfolio_company,meta43908__$1));
});})(company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t43907 = ((function (company_path,map__43906,map__43906__$1,opts,path_fn,link_fn){
return (function __GT_t43907(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__43906__$2,p__43893__$1,owner__$1,company__$1,portfolio_company__$1,meta43908){return (new clustermap.components.full_report.company_list.t43907(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__43906__$2,p__43893__$1,owner__$1,company__$1,portfolio_company__$1,meta43908));
});})(company_path,map__43906,map__43906__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t43907(company_path,link_fn,path_fn,opts,map__43906__$1,p__43893,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1282);if(typeof clustermap.components.full_report.company_list.t43938 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t43938 = (function (comm,opts,owner,companies,company_list,meta43939){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta43939 = meta43939;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t43938.cljs$lang$type = true;
clustermap.components.full_report.company_list.t43938.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t43938";
clustermap.components.full_report.company_list.t43938.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.full-report.company-list/t43938");
});})(comm))
;
clustermap.components.full_report.company_list.t43938.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t43938.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;var attrs43941 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1474);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs43941))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs43941], 0))):{"className": "full-report-list"}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43941))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs43942 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Investor-backed company",cljs.core.constant$keyword$1244);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43942))?sablono.interpreter.attributes(attrs43942):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43942))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43942)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs43947 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Revenue",cljs.core.constant$keyword$1470);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43947))?sablono.interpreter.attributes(attrs43947):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43947))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43947)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Rev. change",cljs.core.constant$keyword$1472))),(function (){var attrs43948 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Employees",cljs.core.constant$keyword$1473);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43948))?sablono.interpreter.attributes(attrs43948):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43948))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43948)], null))));
})())),(function (){var attrs43949 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1475.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1259,cljs.core.constant$keyword$1219,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs43949))?sablono.interpreter.attributes(attrs43949):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43949))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43949)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1474))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43941),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs43950 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Investor-backed company",cljs.core.constant$keyword$1244);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43950))?sablono.interpreter.attributes(attrs43950):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43950))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43950)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs43955 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Revenue",cljs.core.constant$keyword$1470);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43955))?sablono.interpreter.attributes(attrs43955):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43955))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43955)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Rev. change",cljs.core.constant$keyword$1472))),(function (){var attrs43956 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$1474,"Employees",cljs.core.constant$keyword$1473);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs43956))?sablono.interpreter.attributes(attrs43956):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43956))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43956)], null))));
})())),(function (){var attrs43957 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$1475.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1216,cljs.core.constant$keyword$1259,cljs.core.constant$keyword$1219,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs43957))?sablono.interpreter.attributes(attrs43957):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs43957))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs43957)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$1474))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t43938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_43940){var self__ = this;
var _43940__$1 = this;return self__.meta43939;
});})(comm))
;
clustermap.components.full_report.company_list.t43938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_43940,meta43939__$1){var self__ = this;
var _43940__$1 = this;return (new clustermap.components.full_report.company_list.t43938(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta43939__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t43938 = ((function (comm){
return (function __GT_t43938(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta43939){return (new clustermap.components.full_report.company_list.t43938(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta43939));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t43938(comm,opts,owner,companies,company_list,null));
});
