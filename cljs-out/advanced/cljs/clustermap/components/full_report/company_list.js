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
{var attrs22347 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22347))
{return React.DOM.div(sablono.interpreter.attributes(attrs22347),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22347),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22356){var map__22371 = p__22356;var map__22371__$1 = ((cljs.core.seq_QMARK_(map__22371))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22371):map__22371);var opts = map__22371__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22371__$1,cljs.core.constant$keyword$329);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22371__$1,cljs.core.constant$keyword$330);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,company) : path_fn.call(null,cljs.core.constant$keyword$319,company));if(typeof clustermap.components.full_report.company_list.t22372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22372 = (function (company_path,link_fn,path_fn,opts,map__22371,p__22356,owner,company,portfolio_company,meta22373){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22371 = map__22371;
this.p__22356 = p__22356;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22373 = meta22373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22372.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22372.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22372";
clustermap.components.full_report.company_list.t22372.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22372");
});
clustermap.components.full_report.company_list.t22372.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22372.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22375 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$319,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$319,self__.company));if(cljs.core.map_QMARK_(attrs22375))
{return React.DOM.td(sablono.interpreter.attributes(attrs22375),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22375));
}
})(),(function (){var attrs22376 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$320,cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22376))
{return React.DOM.td(sablono.interpreter.attributes(attrs22376),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22376));
}
})(),(function (){var attrs22377 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$321,(function (){var G__22384 = self__.company;var G__22384__$1 = (((G__22384 == null))?null:cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(G__22384));var G__22384__$2 = (((G__22384__$1 == null))?null:cljs.core.filter(((function (G__22384,G__22384__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22384,G__22384__$1))
,G__22384__$1));return G__22384__$2;
})());if(cljs.core.map_QMARK_(attrs22377))
{return React.DOM.td(sablono.interpreter.attributes(attrs22377),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22377));
}
})(),(function (){var attrs22378 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22378))
{return React.DOM.td(sablono.interpreter.attributes(attrs22378),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22378),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22379 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22379))
{return React.DOM.td(sablono.interpreter.attributes(attrs22379),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22379));
}
})(),(function (){var attrs22380 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$315,2,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22380))
{return React.DOM.td(sablono.interpreter.attributes(attrs22380),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22380));
}
})(),(function (){var attrs22381 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22381))
{return React.DOM.td(sablono.interpreter.attributes(attrs22381),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22381),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22382 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22382))
{return React.DOM.td(sablono.interpreter.attributes(attrs22382),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22382));
}
})(),(function (){var attrs22383 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$317,0,cljs.core.constant$keyword$245,"-"));if(cljs.core.map_QMARK_(attrs22383))
{return React.DOM.td(sablono.interpreter.attributes(attrs22383),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22383));
}
})());
});
clustermap.components.full_report.company_list.t22372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22374){var self__ = this;
var _22374__$1 = this;return self__.meta22373;
});
clustermap.components.full_report.company_list.t22372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22374,meta22373__$1){var self__ = this;
var _22374__$1 = this;return (new clustermap.components.full_report.company_list.t22372(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22371,self__.p__22356,self__.owner,self__.company,self__.portfolio_company,meta22373__$1));
});
clustermap.components.full_report.company_list.__GT_t22372 = (function __GT_t22372(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22371__$2,p__22356__$1,owner__$1,company__$1,portfolio_company__$1,meta22373){return (new clustermap.components.full_report.company_list.t22372(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22371__$2,p__22356__$1,owner__$1,company__$1,portfolio_company__$1,meta22373));
});
}
return (new clustermap.components.full_report.company_list.t22372(company_path,link_fn,path_fn,opts,map__22371__$1,p__22356,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){if(typeof clustermap.components.full_report.company_list.t22391 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22391 = (function (opts,owner,companies,company_list,meta22392){
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22392 = meta22392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22391.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22391.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22391";
clustermap.components.full_report.company_list.t22391.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22391");
});
clustermap.components.full_report.company_list.t22391.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22391.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22396 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$312,cljs.core.constant$keyword$331,cljs.core.constant$keyword$313,self__.opts], null));if(cljs.core.map_QMARK_(attrs22396))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22396),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22396));
}
})())));
});
clustermap.components.full_report.company_list.t22391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22393){var self__ = this;
var _22393__$1 = this;return self__.meta22392;
});
clustermap.components.full_report.company_list.t22391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22393,meta22392__$1){var self__ = this;
var _22393__$1 = this;return (new clustermap.components.full_report.company_list.t22391(self__.opts,self__.owner,self__.companies,self__.company_list,meta22392__$1));
});
clustermap.components.full_report.company_list.__GT_t22391 = (function __GT_t22391(opts__$1,owner__$1,companies__$1,company_list__$1,meta22392){return (new clustermap.components.full_report.company_list.t22391(opts__$1,owner__$1,companies__$1,company_list__$1,meta22392));
});
}
return (new clustermap.components.full_report.company_list.t22391(opts,owner,companies,company_list,null));
});
