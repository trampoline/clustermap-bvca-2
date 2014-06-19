// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.routes');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
clustermap.routes.type_name_keys = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665)], null);
clustermap.routes.name_for = (function name_for(type,obj){return cljs.core.get.call(null,obj,cljs.core.get.call(null,clustermap.routes.type_name_keys,type));
});
clustermap.routes.portfolio_company_path = (function portfolio_company_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view_id))+"/portfolio-company/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.investor_company_path = (function investor_company_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view_id))+"/investor-company/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.constituency_path = (function constituency_path(view_id,obj){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view_id))+"/constituency/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(obj)));
});
clustermap.routes.no_selection_path = (function no_selection_path(view_id,_){return ("#/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,view_id)));
});
clustermap.routes.type_paths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),clustermap.routes.portfolio_company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),clustermap.routes.investor_company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),clustermap.routes.constituency_path,null,clustermap.routes.no_selection_path], null);
clustermap.routes.path_for = (function path_for(view_id,type,obj){return cljs.core.apply.call(null,cljs.core.get.call(null,clustermap.routes.type_paths,type),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [view_id,obj], null));
});
clustermap.routes.link_for = (function link_for(view_id,type,obj){return React.DOM.a({"href": clustermap.routes.path_for.call(null,view_id,type,obj)},sablono.interpreter.interpret.call(null,clustermap.routes.name_for.call(null,type,obj)));
});

//# sourceMappingURL=routes.js.map