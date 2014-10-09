// Compiled by ClojureScript 0.0-2322
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
{domina.add_class_BANG_.call(null,mr,"open");
return jayq.core.anim.call(null,jayq.core.$.call(null,cljs.core.first.call(null,domina.nodes.call(null,mr))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),(400));

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
var seq__32870_32876 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32871_32877 = null;var count__32872_32878 = (0);var i__32873_32879 = (0);while(true){
if((i__32873_32879 < count__32872_32878))
{var vec__32874_32880 = cljs.core._nth.call(null,chunk__32871_32877,i__32873_32879);var v_32881 = cljs.core.nth.call(null,vec__32874_32880,(0),null);var body_class_32882 = cljs.core.nth.call(null,vec__32874_32880,(1),null);if(cljs.core._EQ_.call(null,v_32881,view))
{domina.add_class_BANG_.call(null,body,body_class_32882);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32882);
}
{
var G__32883 = seq__32870_32876;
var G__32884 = chunk__32871_32877;
var G__32885 = count__32872_32878;
var G__32886 = (i__32873_32879 + (1));
seq__32870_32876 = G__32883;
chunk__32871_32877 = G__32884;
count__32872_32878 = G__32885;
i__32873_32879 = G__32886;
continue;
}
} else
{var temp__4126__auto___32887 = cljs.core.seq.call(null,seq__32870_32876);if(temp__4126__auto___32887)
{var seq__32870_32888__$1 = temp__4126__auto___32887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32870_32888__$1))
{var c__4314__auto___32889 = cljs.core.chunk_first.call(null,seq__32870_32888__$1);{
var G__32890 = cljs.core.chunk_rest.call(null,seq__32870_32888__$1);
var G__32891 = c__4314__auto___32889;
var G__32892 = cljs.core.count.call(null,c__4314__auto___32889);
var G__32893 = (0);
seq__32870_32876 = G__32890;
chunk__32871_32877 = G__32891;
count__32872_32878 = G__32892;
i__32873_32879 = G__32893;
continue;
}
} else
{var vec__32875_32894 = cljs.core.first.call(null,seq__32870_32888__$1);var v_32895 = cljs.core.nth.call(null,vec__32875_32894,(0),null);var body_class_32896 = cljs.core.nth.call(null,vec__32875_32894,(1),null);if(cljs.core._EQ_.call(null,v_32895,view))
{domina.add_class_BANG_.call(null,body,body_class_32896);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32896);
}
{
var G__32897 = cljs.core.next.call(null,seq__32870_32888__$1);
var G__32898 = null;
var G__32899 = (0);
var G__32900 = (0);
seq__32870_32876 = G__32897;
chunk__32871_32877 = G__32898;
count__32872_32878 = G__32899;
i__32873_32879 = G__32900;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32907 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32908 = null;var count__32909 = (0);var i__32910 = (0);while(true){
if((i__32910 < count__32909))
{var vec__32911 = cljs.core._nth.call(null,chunk__32908,i__32910);var v = cljs.core.nth.call(null,vec__32911,(0),null);var _ = cljs.core.nth.call(null,vec__32911,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32907,chunk__32908,count__32909,i__32910,vec__32911,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32907,chunk__32908,count__32909,i__32910,vec__32911,v,_))
);
{
var G__32913 = seq__32907;
var G__32914 = chunk__32908;
var G__32915 = count__32909;
var G__32916 = (i__32910 + (1));
seq__32907 = G__32913;
chunk__32908 = G__32914;
count__32909 = G__32915;
i__32910 = G__32916;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32907);if(temp__4126__auto__)
{var seq__32907__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32907__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32907__$1);{
var G__32917 = cljs.core.chunk_rest.call(null,seq__32907__$1);
var G__32918 = c__4314__auto__;
var G__32919 = cljs.core.count.call(null,c__4314__auto__);
var G__32920 = (0);
seq__32907 = G__32917;
chunk__32908 = G__32918;
count__32909 = G__32919;
i__32910 = G__32920;
continue;
}
} else
{var vec__32912 = cljs.core.first.call(null,seq__32907__$1);var v = cljs.core.nth.call(null,vec__32912,(0),null);var _ = cljs.core.nth.call(null,vec__32912,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32907,chunk__32908,count__32909,i__32910,vec__32912,v,_,seq__32907__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32907,chunk__32908,count__32909,i__32910,vec__32912,v,_,seq__32907__$1,temp__4126__auto__))
);
{
var G__32921 = cljs.core.next.call(null,seq__32907__$1);
var G__32922 = null;
var G__32923 = (0);
var G__32924 = (0);
seq__32907 = G__32921;
chunk__32908 = G__32922;
count__32909 = G__32923;
i__32910 = G__32924;
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
