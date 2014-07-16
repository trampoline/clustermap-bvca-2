// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina');
goog.require('jayq.core');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('domina.events');
goog.require('domina.events');
goog.require('jayq.core');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('domina.xpath');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.call(null,"[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#nav .search > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var parent = domina.xpath.xpath.call(null,target,"..");domina.events.prevent_default.call(null,e);
domina.toggle_class_BANG_.call(null,parent,"open");
return jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,domina.css.sel.call(null,"#search")))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"#map-report > a"),new cljs.core.Keyword(null,"click","click",1912301393),(function (e){var target = domina.events.target.call(null,e);var mr = domina.css.sel.call(null,"#map-report");domina.events.prevent_default.call(null,e);
if(cljs.core.truth_(domina.has_class_QMARK_.call(null,mr,"open")))
{domina.remove_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),(400));
} else
{if(true)
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));
} else
{return null;
}
}
}));
});
clustermap.nav.body_view_classes = new cljs.core.PersistentArrayMap(null, 2, ["map","view-map","lists","view-lists"], null);
/**
* do the DOM manip to change the view
*/
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.call(null,clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error(("unknown view: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view))));
}
var body = domina.css.sel.call(null,"body");var target_selector = ("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(view));var target_li = domina.css.sel.call(null,target_selector);var ul = domina.xpath.xpath.call(null,target_li,"..");var active_li = domina.css.sel.call(null,ul,"> .active");domina.remove_class_BANG_.call(null,active_li,"active");
domina.add_class_BANG_.call(null,target_li,"active");
var seq__13849_13855 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13850_13856 = null;var count__13851_13857 = (0);var i__13852_13858 = (0);while(true){
if((i__13852_13858 < count__13851_13857))
{var vec__13853_13859 = cljs.core._nth.call(null,chunk__13850_13856,i__13852_13858);var v_13860 = cljs.core.nth.call(null,vec__13853_13859,(0),null);var body_class_13861 = cljs.core.nth.call(null,vec__13853_13859,(1),null);if(cljs.core._EQ_.call(null,v_13860,view))
{domina.add_class_BANG_.call(null,body,body_class_13861);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13861);
}
{
var G__13862 = seq__13849_13855;
var G__13863 = chunk__13850_13856;
var G__13864 = count__13851_13857;
var G__13865 = (i__13852_13858 + (1));
seq__13849_13855 = G__13862;
chunk__13850_13856 = G__13863;
count__13851_13857 = G__13864;
i__13852_13858 = G__13865;
continue;
}
} else
{var temp__4126__auto___13866 = cljs.core.seq.call(null,seq__13849_13855);if(temp__4126__auto___13866)
{var seq__13849_13867__$1 = temp__4126__auto___13866;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13849_13867__$1))
{var c__4299__auto___13868 = cljs.core.chunk_first.call(null,seq__13849_13867__$1);{
var G__13869 = cljs.core.chunk_rest.call(null,seq__13849_13867__$1);
var G__13870 = c__4299__auto___13868;
var G__13871 = cljs.core.count.call(null,c__4299__auto___13868);
var G__13872 = (0);
seq__13849_13855 = G__13869;
chunk__13850_13856 = G__13870;
count__13851_13857 = G__13871;
i__13852_13858 = G__13872;
continue;
}
} else
{var vec__13854_13873 = cljs.core.first.call(null,seq__13849_13867__$1);var v_13874 = cljs.core.nth.call(null,vec__13854_13873,(0),null);var body_class_13875 = cljs.core.nth.call(null,vec__13854_13873,(1),null);if(cljs.core._EQ_.call(null,v_13874,view))
{domina.add_class_BANG_.call(null,body,body_class_13875);
} else
{domina.remove_class_BANG_.call(null,body,body_class_13875);
}
{
var G__13876 = cljs.core.next.call(null,seq__13849_13867__$1);
var G__13877 = null;
var G__13878 = (0);
var G__13879 = (0);
seq__13849_13855 = G__13876;
chunk__13850_13856 = G__13877;
count__13851_13857 = G__13878;
i__13852_13858 = G__13879;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.call(null,document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__13886 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__13887 = null;var count__13888 = (0);var i__13889 = (0);while(true){
if((i__13889 < count__13888))
{var vec__13890 = cljs.core._nth.call(null,chunk__13887,i__13889);var v = cljs.core.nth.call(null,vec__13890,(0),null);var _ = cljs.core.nth.call(null,vec__13890,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13886,chunk__13887,count__13888,i__13889,vec__13890,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13886,chunk__13887,count__13888,i__13889,vec__13890,v,_))
);
{
var G__13892 = seq__13886;
var G__13893 = chunk__13887;
var G__13894 = count__13888;
var G__13895 = (i__13889 + (1));
seq__13886 = G__13892;
chunk__13887 = G__13893;
count__13888 = G__13894;
i__13889 = G__13895;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13886);if(temp__4126__auto__)
{var seq__13886__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13886__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13886__$1);{
var G__13896 = cljs.core.chunk_rest.call(null,seq__13886__$1);
var G__13897 = c__4299__auto__;
var G__13898 = cljs.core.count.call(null,c__4299__auto__);
var G__13899 = (0);
seq__13886 = G__13896;
chunk__13887 = G__13897;
count__13888 = G__13898;
i__13889 = G__13899;
continue;
}
} else
{var vec__13891 = cljs.core.first.call(null,seq__13886__$1);var v = cljs.core.nth.call(null,vec__13891,(0),null);var _ = cljs.core.nth.call(null,vec__13891,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__13886,chunk__13887,count__13888,i__13889,vec__13891,v,_,seq__13886__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__13886,chunk__13887,count__13888,i__13889,vec__13891,v,_,seq__13886__$1,temp__4126__auto__))
);
{
var G__13900 = cljs.core.next.call(null,seq__13886__$1);
var G__13901 = null;
var G__13902 = (0);
var G__13903 = (0);
seq__13886 = G__13900;
chunk__13887 = G__13901;
count__13888 = G__13902;
i__13889 = G__13903;
continue;
}
}
} else
{return null;
}
}
break;
}
});
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips.call(null);
clustermap.nav.handle_toggle_nav_search.call(null);
clustermap.nav.handle_hide_show_map_report.call(null);
return clustermap.nav.handle_view_switches.call(null,comm);
});
