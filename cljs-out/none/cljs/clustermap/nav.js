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
var seq__51852_51858 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51853_51859 = null;var count__51854_51860 = (0);var i__51855_51861 = (0);while(true){
if((i__51855_51861 < count__51854_51860))
{var vec__51856_51862 = cljs.core._nth.call(null,chunk__51853_51859,i__51855_51861);var v_51863 = cljs.core.nth.call(null,vec__51856_51862,(0),null);var body_class_51864 = cljs.core.nth.call(null,vec__51856_51862,(1),null);if(cljs.core._EQ_.call(null,v_51863,view))
{domina.add_class_BANG_.call(null,body,body_class_51864);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51864);
}
{
var G__51865 = seq__51852_51858;
var G__51866 = chunk__51853_51859;
var G__51867 = count__51854_51860;
var G__51868 = (i__51855_51861 + (1));
seq__51852_51858 = G__51865;
chunk__51853_51859 = G__51866;
count__51854_51860 = G__51867;
i__51855_51861 = G__51868;
continue;
}
} else
{var temp__4126__auto___51869 = cljs.core.seq.call(null,seq__51852_51858);if(temp__4126__auto___51869)
{var seq__51852_51870__$1 = temp__4126__auto___51869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51852_51870__$1))
{var c__4314__auto___51871 = cljs.core.chunk_first.call(null,seq__51852_51870__$1);{
var G__51872 = cljs.core.chunk_rest.call(null,seq__51852_51870__$1);
var G__51873 = c__4314__auto___51871;
var G__51874 = cljs.core.count.call(null,c__4314__auto___51871);
var G__51875 = (0);
seq__51852_51858 = G__51872;
chunk__51853_51859 = G__51873;
count__51854_51860 = G__51874;
i__51855_51861 = G__51875;
continue;
}
} else
{var vec__51857_51876 = cljs.core.first.call(null,seq__51852_51870__$1);var v_51877 = cljs.core.nth.call(null,vec__51857_51876,(0),null);var body_class_51878 = cljs.core.nth.call(null,vec__51857_51876,(1),null);if(cljs.core._EQ_.call(null,v_51877,view))
{domina.add_class_BANG_.call(null,body,body_class_51878);
} else
{domina.remove_class_BANG_.call(null,body,body_class_51878);
}
{
var G__51879 = cljs.core.next.call(null,seq__51852_51870__$1);
var G__51880 = null;
var G__51881 = (0);
var G__51882 = (0);
seq__51852_51858 = G__51879;
chunk__51853_51859 = G__51880;
count__51854_51860 = G__51881;
i__51855_51861 = G__51882;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__51889 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__51890 = null;var count__51891 = (0);var i__51892 = (0);while(true){
if((i__51892 < count__51891))
{var vec__51893 = cljs.core._nth.call(null,chunk__51890,i__51892);var v = cljs.core.nth.call(null,vec__51893,(0),null);var _ = cljs.core.nth.call(null,vec__51893,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51889,chunk__51890,count__51891,i__51892,vec__51893,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51889,chunk__51890,count__51891,i__51892,vec__51893,v,_))
);
{
var G__51895 = seq__51889;
var G__51896 = chunk__51890;
var G__51897 = count__51891;
var G__51898 = (i__51892 + (1));
seq__51889 = G__51895;
chunk__51890 = G__51896;
count__51891 = G__51897;
i__51892 = G__51898;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__51889);if(temp__4126__auto__)
{var seq__51889__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__51889__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__51889__$1);{
var G__51899 = cljs.core.chunk_rest.call(null,seq__51889__$1);
var G__51900 = c__4314__auto__;
var G__51901 = cljs.core.count.call(null,c__4314__auto__);
var G__51902 = (0);
seq__51889 = G__51899;
chunk__51890 = G__51900;
count__51891 = G__51901;
i__51892 = G__51902;
continue;
}
} else
{var vec__51894 = cljs.core.first.call(null,seq__51889__$1);var v = cljs.core.nth.call(null,vec__51894,(0),null);var _ = cljs.core.nth.call(null,vec__51894,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__51889,chunk__51890,count__51891,i__51892,vec__51894,v,_,seq__51889__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__51889,chunk__51890,count__51891,i__51892,vec__51894,v,_,seq__51889__$1,temp__4126__auto__))
);
{
var G__51903 = cljs.core.next.call(null,seq__51889__$1);
var G__51904 = null;
var G__51905 = (0);
var G__51906 = (0);
seq__51889 = G__51903;
chunk__51890 = G__51904;
count__51891 = G__51905;
i__51892 = G__51906;
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

//# sourceMappingURL=nav.js.map