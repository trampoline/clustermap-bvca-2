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
var seq__32876_32882 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32877_32883 = null;var count__32878_32884 = (0);var i__32879_32885 = (0);while(true){
if((i__32879_32885 < count__32878_32884))
{var vec__32880_32886 = cljs.core._nth.call(null,chunk__32877_32883,i__32879_32885);var v_32887 = cljs.core.nth.call(null,vec__32880_32886,(0),null);var body_class_32888 = cljs.core.nth.call(null,vec__32880_32886,(1),null);if(cljs.core._EQ_.call(null,v_32887,view))
{domina.add_class_BANG_.call(null,body,body_class_32888);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32888);
}
{
var G__32889 = seq__32876_32882;
var G__32890 = chunk__32877_32883;
var G__32891 = count__32878_32884;
var G__32892 = (i__32879_32885 + (1));
seq__32876_32882 = G__32889;
chunk__32877_32883 = G__32890;
count__32878_32884 = G__32891;
i__32879_32885 = G__32892;
continue;
}
} else
{var temp__4126__auto___32893 = cljs.core.seq.call(null,seq__32876_32882);if(temp__4126__auto___32893)
{var seq__32876_32894__$1 = temp__4126__auto___32893;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32876_32894__$1))
{var c__4314__auto___32895 = cljs.core.chunk_first.call(null,seq__32876_32894__$1);{
var G__32896 = cljs.core.chunk_rest.call(null,seq__32876_32894__$1);
var G__32897 = c__4314__auto___32895;
var G__32898 = cljs.core.count.call(null,c__4314__auto___32895);
var G__32899 = (0);
seq__32876_32882 = G__32896;
chunk__32877_32883 = G__32897;
count__32878_32884 = G__32898;
i__32879_32885 = G__32899;
continue;
}
} else
{var vec__32881_32900 = cljs.core.first.call(null,seq__32876_32894__$1);var v_32901 = cljs.core.nth.call(null,vec__32881_32900,(0),null);var body_class_32902 = cljs.core.nth.call(null,vec__32881_32900,(1),null);if(cljs.core._EQ_.call(null,v_32901,view))
{domina.add_class_BANG_.call(null,body,body_class_32902);
} else
{domina.remove_class_BANG_.call(null,body,body_class_32902);
}
{
var G__32903 = cljs.core.next.call(null,seq__32876_32894__$1);
var G__32904 = null;
var G__32905 = (0);
var G__32906 = (0);
seq__32876_32882 = G__32903;
chunk__32877_32883 = G__32904;
count__32878_32884 = G__32905;
i__32879_32885 = G__32906;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__32913 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__32914 = null;var count__32915 = (0);var i__32916 = (0);while(true){
if((i__32916 < count__32915))
{var vec__32917 = cljs.core._nth.call(null,chunk__32914,i__32916);var v = cljs.core.nth.call(null,vec__32917,(0),null);var _ = cljs.core.nth.call(null,vec__32917,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32913,chunk__32914,count__32915,i__32916,vec__32917,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32913,chunk__32914,count__32915,i__32916,vec__32917,v,_))
);
{
var G__32919 = seq__32913;
var G__32920 = chunk__32914;
var G__32921 = count__32915;
var G__32922 = (i__32916 + (1));
seq__32913 = G__32919;
chunk__32914 = G__32920;
count__32915 = G__32921;
i__32916 = G__32922;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__32913);if(temp__4126__auto__)
{var seq__32913__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32913__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__32913__$1);{
var G__32923 = cljs.core.chunk_rest.call(null,seq__32913__$1);
var G__32924 = c__4314__auto__;
var G__32925 = cljs.core.count.call(null,c__4314__auto__);
var G__32926 = (0);
seq__32913 = G__32923;
chunk__32914 = G__32924;
count__32915 = G__32925;
i__32916 = G__32926;
continue;
}
} else
{var vec__32918 = cljs.core.first.call(null,seq__32913__$1);var v = cljs.core.nth.call(null,vec__32918,(0),null);var _ = cljs.core.nth.call(null,vec__32918,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__32913,chunk__32914,count__32915,i__32916,vec__32918,v,_,seq__32913__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__32913,chunk__32914,count__32915,i__32916,vec__32918,v,_,seq__32913__$1,temp__4126__auto__))
);
{
var G__32927 = cljs.core.next.call(null,seq__32913__$1);
var G__32928 = null;
var G__32929 = (0);
var G__32930 = (0);
seq__32913 = G__32927;
chunk__32914 = G__32928;
count__32915 = G__32929;
i__32916 = G__32930;
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
