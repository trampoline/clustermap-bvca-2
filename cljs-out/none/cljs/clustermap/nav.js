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
var seq__49758_49764 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49759_49765 = null;var count__49760_49766 = (0);var i__49761_49767 = (0);while(true){
if((i__49761_49767 < count__49760_49766))
{var vec__49762_49768 = cljs.core._nth.call(null,chunk__49759_49765,i__49761_49767);var v_49769 = cljs.core.nth.call(null,vec__49762_49768,(0),null);var body_class_49770 = cljs.core.nth.call(null,vec__49762_49768,(1),null);if(cljs.core._EQ_.call(null,v_49769,view))
{domina.add_class_BANG_.call(null,body,body_class_49770);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49770);
}
{
var G__49771 = seq__49758_49764;
var G__49772 = chunk__49759_49765;
var G__49773 = count__49760_49766;
var G__49774 = (i__49761_49767 + (1));
seq__49758_49764 = G__49771;
chunk__49759_49765 = G__49772;
count__49760_49766 = G__49773;
i__49761_49767 = G__49774;
continue;
}
} else
{var temp__4126__auto___49775 = cljs.core.seq.call(null,seq__49758_49764);if(temp__4126__auto___49775)
{var seq__49758_49776__$1 = temp__4126__auto___49775;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49758_49776__$1))
{var c__4299__auto___49777 = cljs.core.chunk_first.call(null,seq__49758_49776__$1);{
var G__49778 = cljs.core.chunk_rest.call(null,seq__49758_49776__$1);
var G__49779 = c__4299__auto___49777;
var G__49780 = cljs.core.count.call(null,c__4299__auto___49777);
var G__49781 = (0);
seq__49758_49764 = G__49778;
chunk__49759_49765 = G__49779;
count__49760_49766 = G__49780;
i__49761_49767 = G__49781;
continue;
}
} else
{var vec__49763_49782 = cljs.core.first.call(null,seq__49758_49776__$1);var v_49783 = cljs.core.nth.call(null,vec__49763_49782,(0),null);var body_class_49784 = cljs.core.nth.call(null,vec__49763_49782,(1),null);if(cljs.core._EQ_.call(null,v_49783,view))
{domina.add_class_BANG_.call(null,body,body_class_49784);
} else
{domina.remove_class_BANG_.call(null,body,body_class_49784);
}
{
var G__49785 = cljs.core.next.call(null,seq__49758_49776__$1);
var G__49786 = null;
var G__49787 = (0);
var G__49788 = (0);
seq__49758_49764 = G__49785;
chunk__49759_49765 = G__49786;
count__49760_49766 = G__49787;
i__49761_49767 = G__49788;
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
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__49795 = cljs.core.seq.call(null,clustermap.nav.body_view_classes);var chunk__49796 = null;var count__49797 = (0);var i__49798 = (0);while(true){
if((i__49798 < count__49797))
{var vec__49799 = cljs.core._nth.call(null,chunk__49796,i__49798);var v = cljs.core.nth.call(null,vec__49799,(0),null);var _ = cljs.core.nth.call(null,vec__49799,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49795,chunk__49796,count__49797,i__49798,vec__49799,v,_){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49795,chunk__49796,count__49797,i__49798,vec__49799,v,_))
);
{
var G__49801 = seq__49795;
var G__49802 = chunk__49796;
var G__49803 = count__49797;
var G__49804 = (i__49798 + (1));
seq__49795 = G__49801;
chunk__49796 = G__49802;
count__49797 = G__49803;
i__49798 = G__49804;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49795);if(temp__4126__auto__)
{var seq__49795__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49795__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49795__$1);{
var G__49805 = cljs.core.chunk_rest.call(null,seq__49795__$1);
var G__49806 = c__4299__auto__;
var G__49807 = cljs.core.count.call(null,c__4299__auto__);
var G__49808 = (0);
seq__49795 = G__49805;
chunk__49796 = G__49806;
count__49797 = G__49807;
i__49798 = G__49808;
continue;
}
} else
{var vec__49800 = cljs.core.first.call(null,seq__49795__$1);var v = cljs.core.nth.call(null,vec__49800,(0),null);var _ = cljs.core.nth.call(null,vec__49800,(1),null);domina.events.listen_BANG_.call(null,domina.css.sel.call(null,("#nav ."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)+" > a")),new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__49795,chunk__49796,count__49797,i__49798,vec__49800,v,_,seq__49795__$1,temp__4126__auto__){
return (function (e){domina.events.prevent_default.call(null,e);
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",-1206699831),v], null));
});})(seq__49795,chunk__49796,count__49797,i__49798,vec__49800,v,_,seq__49795__$1,temp__4126__auto__))
);
{
var G__49809 = cljs.core.next.call(null,seq__49795__$1);
var G__49810 = null;
var G__49811 = (0);
var G__49812 = (0);
seq__49795 = G__49809;
chunk__49796 = G__49810;
count__49797 = G__49811;
i__49798 = G__49812;
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