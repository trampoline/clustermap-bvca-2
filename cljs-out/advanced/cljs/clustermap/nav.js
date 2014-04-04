// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.xpath');
goog.require('jayq.core');
goog.require('domina');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('domina.css');
goog.require('domina.xpath');
goog.require('jayq.core');
clustermap.nav.init_bootstrap_tooltips = (function init_bootstrap_tooltips(){return jayq.core.$.cljs$core$IFn$_invoke$arity$1("[data-toggle='tooltip']").tooltip();
});
clustermap.nav.handle_toggle_nav_search = (function handle_toggle_nav_search(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#nav .search > a"),cljs.core.constant$keyword$753,(function (e){var target = domina.events.target(e);var parent = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target,"..");domina.events.prevent_default(e);
domina.toggle_class_BANG_(parent,"open");
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#search").domina$DomContent$nodes$arity$1(null))).toggle();
}));
});
clustermap.nav.handle_hide_show_map_report = (function handle_hide_show_map_report(){return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report > a"),cljs.core.constant$keyword$753,(function (e){var target = domina.events.target(e);var mr = domina.css.sel.cljs$core$IFn$_invoke$arity$1("#map-report");domina.events.prevent_default(e);
if(cljs.core.truth_(domina.has_class_QMARK_(mr,"open")))
{domina.remove_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","-270px"], null),400);
} else
{if(true)
{domina.add_class_BANG_(mr,"open");
return jayq.core.anim(jayq.core.$.cljs$core$IFn$_invoke$arity$1(cljs.core.first(mr.domina$DomContent$nodes$arity$1(null))),new cljs.core.PersistentArrayMap(null, 1, ["right","0px"], null),400);
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
clustermap.nav.change_view = (function change_view(view){if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.nav.body_view_classes,view)))
{} else
{throw (new Error([cljs.core.str("unknown view: "),cljs.core.str(view)].join('')));
}
var body = domina.css.sel.cljs$core$IFn$_invoke$arity$1("body");var target_selector = [cljs.core.str("#nav ."),cljs.core.str(view)].join('');var target_li = domina.css.sel.cljs$core$IFn$_invoke$arity$1(target_selector);var ul = domina.xpath.xpath.cljs$core$IFn$_invoke$arity$2(target_li,"..");var active_li = domina.css.sel.cljs$core$IFn$_invoke$arity$2(ul,"> .active");domina.remove_class_BANG_(active_li,"active");
domina.add_class_BANG_(target_li,"active");
var seq__34643_34649 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34644_34650 = null;var count__34645_34651 = 0;var i__34646_34652 = 0;while(true){
if((i__34646_34652 < count__34645_34651))
{var vec__34647_34653 = chunk__34644_34650.cljs$core$IIndexed$_nth$arity$2(null,i__34646_34652);var v_34654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647_34653,0,null);var body_class_34655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34647_34653,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34654,view))
{domina.add_class_BANG_(body,body_class_34655);
} else
{domina.remove_class_BANG_(body,body_class_34655);
}
{
var G__34656 = seq__34643_34649;
var G__34657 = chunk__34644_34650;
var G__34658 = count__34645_34651;
var G__34659 = (i__34646_34652 + 1);
seq__34643_34649 = G__34656;
chunk__34644_34650 = G__34657;
count__34645_34651 = G__34658;
i__34646_34652 = G__34659;
continue;
}
} else
{var temp__4092__auto___34660 = cljs.core.seq(seq__34643_34649);if(temp__4092__auto___34660)
{var seq__34643_34661__$1 = temp__4092__auto___34660;if(cljs.core.chunked_seq_QMARK_(seq__34643_34661__$1))
{var c__4189__auto___34662 = cljs.core.chunk_first(seq__34643_34661__$1);{
var G__34663 = cljs.core.chunk_rest(seq__34643_34661__$1);
var G__34664 = c__4189__auto___34662;
var G__34665 = cljs.core.count(c__4189__auto___34662);
var G__34666 = 0;
seq__34643_34649 = G__34663;
chunk__34644_34650 = G__34664;
count__34645_34651 = G__34665;
i__34646_34652 = G__34666;
continue;
}
} else
{var vec__34648_34667 = cljs.core.first(seq__34643_34661__$1);var v_34668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34648_34667,0,null);var body_class_34669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34648_34667,1,null);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_34668,view))
{domina.add_class_BANG_(body,body_class_34669);
} else
{domina.remove_class_BANG_(body,body_class_34669);
}
{
var G__34670 = cljs.core.next(seq__34643_34661__$1);
var G__34671 = null;
var G__34672 = 0;
var G__34673 = 0;
seq__34643_34649 = G__34670;
chunk__34644_34650 = G__34671;
count__34645_34651 = G__34672;
i__34646_34652 = G__34673;
continue;
}
}
} else
{}
}
break;
}
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).trigger("clustermap-change-view");
});
/**
* sends [:change-view <view>] messages to the command channel
*/
clustermap.nav.handle_view_switches = (function handle_view_switches(comm){var seq__34680 = cljs.core.seq(clustermap.nav.body_view_classes);var chunk__34681 = null;var count__34682 = 0;var i__34683 = 0;while(true){
if((i__34683 < count__34682))
{var vec__34684 = chunk__34681.cljs$core$IIndexed$_nth$arity$2(null,i__34683);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$753,((function (seq__34680,chunk__34681,count__34682,i__34683,vec__34684,v,_){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,v], null));
});})(seq__34680,chunk__34681,count__34682,i__34683,vec__34684,v,_))
);
{
var G__34686 = seq__34680;
var G__34687 = chunk__34681;
var G__34688 = count__34682;
var G__34689 = (i__34683 + 1);
seq__34680 = G__34686;
chunk__34681 = G__34687;
count__34682 = G__34688;
i__34683 = G__34689;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__34680);if(temp__4092__auto__)
{var seq__34680__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__34680__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__34680__$1);{
var G__34690 = cljs.core.chunk_rest(seq__34680__$1);
var G__34691 = c__4189__auto__;
var G__34692 = cljs.core.count(c__4189__auto__);
var G__34693 = 0;
seq__34680 = G__34690;
chunk__34681 = G__34691;
count__34682 = G__34692;
i__34683 = G__34693;
continue;
}
} else
{var vec__34685 = cljs.core.first(seq__34680__$1);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,0,null);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,1,null);domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.css.sel.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#nav ."),cljs.core.str(v),cljs.core.str(" > a")].join('')),cljs.core.constant$keyword$753,((function (seq__34680,chunk__34681,count__34682,i__34683,vec__34685,v,_,seq__34680__$1,temp__4092__auto__){
return (function (e){domina.events.prevent_default(e);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$638,v], null));
});})(seq__34680,chunk__34681,count__34682,i__34683,vec__34685,v,_,seq__34680__$1,temp__4092__auto__))
);
{
var G__34694 = cljs.core.next(seq__34680__$1);
var G__34695 = null;
var G__34696 = 0;
var G__34697 = 0;
seq__34680 = G__34694;
chunk__34681 = G__34695;
count__34682 = G__34696;
i__34683 = G__34697;
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
clustermap.nav.init = (function init(comm){clustermap.nav.init_bootstrap_tooltips();
clustermap.nav.handle_toggle_nav_search();
clustermap.nav.handle_hide_show_map_report();
return clustermap.nav.handle_view_switches(comm);
});
