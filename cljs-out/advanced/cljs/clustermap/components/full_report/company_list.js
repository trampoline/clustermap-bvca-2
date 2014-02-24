// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs22367 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22367))
{return React.DOM.div(sablono.interpreter.attributes(attrs22367),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22367),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22376){var map__22391 = p__22376;var map__22391__$1 = ((cljs.core.seq_QMARK_(map__22391))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22391):map__22391);var opts = map__22391__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391__$1,cljs.core.constant$keyword$320);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22391__$1,cljs.core.constant$keyword$321);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,company) : path_fn.call(null,cljs.core.constant$keyword$310,company));if(typeof clustermap.components.full_report.company_list.t22392 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22392 = (function (company_path,link_fn,path_fn,opts,map__22391,p__22376,owner,company,portfolio_company,meta22393){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22391 = map__22391;
this.p__22376 = p__22376;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22393 = meta22393;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22392.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22392.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22392";
clustermap.components.full_report.company_list.t22392.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22392");
});
clustermap.components.full_report.company_list.t22392.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22392.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22395 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$310,self__.company));if(cljs.core.map_QMARK_(attrs22395))
{return React.DOM.td(sablono.interpreter.attributes(attrs22395),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22395));
}
})(),(function (){var attrs22396 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$311,cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22396))
{return React.DOM.td(sablono.interpreter.attributes(attrs22396),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22396));
}
})(),(function (){var attrs22397 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$312,(function (){var G__22404 = self__.company;var G__22404__$1 = (((G__22404 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22404));var G__22404__$2 = (((G__22404__$1 == null))?null:cljs.core.filter(((function (G__22404,G__22404__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22404,G__22404__$1))
,G__22404__$1));return G__22404__$2;
})());if(cljs.core.map_QMARK_(attrs22397))
{return React.DOM.td(sablono.interpreter.attributes(attrs22397),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22397));
}
})(),(function (){var attrs22398 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22398))
{return React.DOM.td(sablono.interpreter.attributes(attrs22398),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22398),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22399 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22399))
{return React.DOM.td(sablono.interpreter.attributes(attrs22399),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22399));
}
})(),(function (){var attrs22400 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22400))
{return React.DOM.td(sablono.interpreter.attributes(attrs22400),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22400));
}
})(),(function (){var attrs22401 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22401))
{return React.DOM.td(sablono.interpreter.attributes(attrs22401),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22401),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22402 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22402))
{return React.DOM.td(sablono.interpreter.attributes(attrs22402),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22402));
}
})(),(function (){var attrs22403 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22403))
{return React.DOM.td(sablono.interpreter.attributes(attrs22403),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22403));
}
})());
});
clustermap.components.full_report.company_list.t22392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22394){var self__ = this;
var _22394__$1 = this;return self__.meta22393;
});
clustermap.components.full_report.company_list.t22392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22394,meta22393__$1){var self__ = this;
var _22394__$1 = this;return (new clustermap.components.full_report.company_list.t22392(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22391,self__.p__22376,self__.owner,self__.company,self__.portfolio_company,meta22393__$1));
});
clustermap.components.full_report.company_list.__GT_t22392 = (function __GT_t22392(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22391__$2,p__22376__$1,owner__$1,company__$1,portfolio_company__$1,meta22393){return (new clustermap.components.full_report.company_list.t22392(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22391__$2,p__22376__$1,owner__$1,company__$1,portfolio_company__$1,meta22393));
});
}
return (new clustermap.components.full_report.company_list.t22392(company_path,link_fn,path_fn,opts,map__22391__$1,p__22376,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){if(typeof clustermap.components.full_report.company_list.t22411 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22411 = (function (opts,owner,companies,company_list,meta22412){
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22412 = meta22412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22411.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22411.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22411";
clustermap.components.full_report.company_list.t22411.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22411");
});
clustermap.components.full_report.company_list.t22411.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22411.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22416 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$303,cljs.core.constant$keyword$327,cljs.core.constant$keyword$304,self__.opts], null));if(cljs.core.map_QMARK_(attrs22416))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22416),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22416));
}
})())));
});
clustermap.components.full_report.company_list.t22411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22413){var self__ = this;
var _22413__$1 = this;return self__.meta22412;
});
clustermap.components.full_report.company_list.t22411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22413,meta22412__$1){var self__ = this;
var _22413__$1 = this;return (new clustermap.components.full_report.company_list.t22411(self__.opts,self__.owner,self__.companies,self__.company_list,meta22412__$1));
});
clustermap.components.full_report.company_list.__GT_t22411 = (function __GT_t22411(opts__$1,owner__$1,companies__$1,company_list__$1,meta22412){return (new clustermap.components.full_report.company_list.t22411(opts__$1,owner__$1,companies__$1,company_list__$1,meta22412));
});
}
return (new clustermap.components.full_report.company_list.t22411(opts,owner,companies,company_list,null));
});
