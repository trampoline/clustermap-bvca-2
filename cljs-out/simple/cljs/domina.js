// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19634 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19636,opt_wrapper_19634,table_section_wrapper_19635,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19634,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19635,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19635,cell_wrapper_19636,table_section_wrapper_19635,table_section_wrapper_19635]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3627__auto__ = div.firstChild;if(cljs.core.truth_(and__3627__auto__))
{return div.firstChild.childNodes;
} else
{return and__3627__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19641 = cljs.core.seq.call(null,tbody);var chunk__19642 = null;var count__19643 = (0);var i__19644 = (0);while(true){
if((i__19644 < count__19643))
{var child = cljs.core._nth.call(null,chunk__19642,i__19644);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19645 = seq__19641;
var G__19646 = chunk__19642;
var G__19647 = count__19643;
var G__19648 = (i__19644 + (1));
seq__19641 = G__19645;
chunk__19642 = G__19646;
count__19643 = G__19647;
i__19644 = G__19648;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19641);if(temp__4126__auto__)
{var seq__19641__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19641__$1))
{var c__4408__auto__ = cljs.core.chunk_first.call(null,seq__19641__$1);{
var G__19649 = cljs.core.chunk_rest.call(null,seq__19641__$1);
var G__19650 = c__4408__auto__;
var G__19651 = cljs.core.count.call(null,c__4408__auto__);
var G__19652 = (0);
seq__19641 = G__19649;
chunk__19642 = G__19650;
count__19643 = G__19651;
i__19644 = G__19652;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19641__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19653 = cljs.core.next.call(null,seq__19641__$1);
var G__19654 = null;
var G__19655 = (0);
var G__19656 = (0);
seq__19641 = G__19653;
chunk__19642 = G__19654;
count__19643 = G__19655;
i__19644 = G__19656;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19658 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19658,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19658,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19658,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19659 = wrapper.lastChild;
var G__19660 = (level - (1));
wrapper = G__19659;
level = G__19660;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3627__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3627__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3627__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj19662 = {};return obj19662;
})();
domina.nodes = (function nodes(content){if((function (){var and__3627__auto__ = content;if(and__3627__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3627__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4275__auto__ = (((content == null))?null:content);return (function (){var or__3639__auto__ = (domina.nodes[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.nodes["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3627__auto__ = nodeseq;if(and__3627__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3627__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4275__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3639__auto__ = (domina.single_node[goog.typeOf(x__4275__auto__)]);if(or__3639__auto__)
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = (domina.single_node["_"]);if(or__3639__auto____$1)
{return or__3639__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3627__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3627__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3627__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__19663){
var mesg = cljs.core.seq(arglist__19663);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__19664){
var mesg = cljs.core.seq(arglist__19664);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__19665){
var contents = cljs.core.seq(arglist__19665);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19666_SHARP_){return p1__19666_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19667_SHARP_,p2__19668_SHARP_){return goog.dom.insertChildAt(p1__19667_SHARP_,p2__19668_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19670_SHARP_,p2__19669_SHARP_){return goog.dom.insertSiblingBefore(p2__19669_SHARP_,p1__19670_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19672_SHARP_,p2__19671_SHARP_){return goog.dom.insertSiblingAfter(p2__19671_SHARP_,p1__19672_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19674_SHARP_,p2__19673_SHARP_){return goog.dom.replaceNode(p2__19673_SHARP_,p1__19674_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__19679_19683 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19680_19684 = null;var count__19681_19685 = (0);var i__19682_19686 = (0);while(true){
if((i__19682_19686 < count__19681_19685))
{var n_19687 = cljs.core._nth.call(null,chunk__19680_19684,i__19682_19686);goog.style.setStyle(n_19687,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19688 = seq__19679_19683;
var G__19689 = chunk__19680_19684;
var G__19690 = count__19681_19685;
var G__19691 = (i__19682_19686 + (1));
seq__19679_19683 = G__19688;
chunk__19680_19684 = G__19689;
count__19681_19685 = G__19690;
i__19682_19686 = G__19691;
continue;
}
} else
{var temp__4126__auto___19692 = cljs.core.seq.call(null,seq__19679_19683);if(temp__4126__auto___19692)
{var seq__19679_19693__$1 = temp__4126__auto___19692;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19679_19693__$1))
{var c__4408__auto___19694 = cljs.core.chunk_first.call(null,seq__19679_19693__$1);{
var G__19695 = cljs.core.chunk_rest.call(null,seq__19679_19693__$1);
var G__19696 = c__4408__auto___19694;
var G__19697 = cljs.core.count.call(null,c__4408__auto___19694);
var G__19698 = (0);
seq__19679_19683 = G__19695;
chunk__19680_19684 = G__19696;
count__19681_19685 = G__19697;
i__19682_19686 = G__19698;
continue;
}
} else
{var n_19699 = cljs.core.first.call(null,seq__19679_19693__$1);goog.style.setStyle(n_19699,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19700 = cljs.core.next.call(null,seq__19679_19693__$1);
var G__19701 = null;
var G__19702 = (0);
var G__19703 = (0);
seq__19679_19683 = G__19700;
chunk__19680_19684 = G__19701;
count__19681_19685 = G__19702;
i__19682_19686 = G__19703;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19704){
var content = cljs.core.first(arglist__19704);
arglist__19704 = cljs.core.next(arglist__19704);
var name = cljs.core.first(arglist__19704);
var value = cljs.core.rest(arglist__19704);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__19709_19713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19710_19714 = null;var count__19711_19715 = (0);var i__19712_19716 = (0);while(true){
if((i__19712_19716 < count__19711_19715))
{var n_19717 = cljs.core._nth.call(null,chunk__19710_19714,i__19712_19716);n_19717.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19718 = seq__19709_19713;
var G__19719 = chunk__19710_19714;
var G__19720 = count__19711_19715;
var G__19721 = (i__19712_19716 + (1));
seq__19709_19713 = G__19718;
chunk__19710_19714 = G__19719;
count__19711_19715 = G__19720;
i__19712_19716 = G__19721;
continue;
}
} else
{var temp__4126__auto___19722 = cljs.core.seq.call(null,seq__19709_19713);if(temp__4126__auto___19722)
{var seq__19709_19723__$1 = temp__4126__auto___19722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19709_19723__$1))
{var c__4408__auto___19724 = cljs.core.chunk_first.call(null,seq__19709_19723__$1);{
var G__19725 = cljs.core.chunk_rest.call(null,seq__19709_19723__$1);
var G__19726 = c__4408__auto___19724;
var G__19727 = cljs.core.count.call(null,c__4408__auto___19724);
var G__19728 = (0);
seq__19709_19713 = G__19725;
chunk__19710_19714 = G__19726;
count__19711_19715 = G__19727;
i__19712_19716 = G__19728;
continue;
}
} else
{var n_19729 = cljs.core.first.call(null,seq__19709_19723__$1);n_19729.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19730 = cljs.core.next.call(null,seq__19709_19723__$1);
var G__19731 = null;
var G__19732 = (0);
var G__19733 = (0);
seq__19709_19713 = G__19730;
chunk__19710_19714 = G__19731;
count__19711_19715 = G__19732;
i__19712_19716 = G__19733;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19734){
var content = cljs.core.first(arglist__19734);
arglist__19734 = cljs.core.next(arglist__19734);
var name = cljs.core.first(arglist__19734);
var value = cljs.core.rest(arglist__19734);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19739_19743 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19740_19744 = null;var count__19741_19745 = (0);var i__19742_19746 = (0);while(true){
if((i__19742_19746 < count__19741_19745))
{var n_19747 = cljs.core._nth.call(null,chunk__19740_19744,i__19742_19746);n_19747.removeAttribute(cljs.core.name.call(null,name));
{
var G__19748 = seq__19739_19743;
var G__19749 = chunk__19740_19744;
var G__19750 = count__19741_19745;
var G__19751 = (i__19742_19746 + (1));
seq__19739_19743 = G__19748;
chunk__19740_19744 = G__19749;
count__19741_19745 = G__19750;
i__19742_19746 = G__19751;
continue;
}
} else
{var temp__4126__auto___19752 = cljs.core.seq.call(null,seq__19739_19743);if(temp__4126__auto___19752)
{var seq__19739_19753__$1 = temp__4126__auto___19752;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19739_19753__$1))
{var c__4408__auto___19754 = cljs.core.chunk_first.call(null,seq__19739_19753__$1);{
var G__19755 = cljs.core.chunk_rest.call(null,seq__19739_19753__$1);
var G__19756 = c__4408__auto___19754;
var G__19757 = cljs.core.count.call(null,c__4408__auto___19754);
var G__19758 = (0);
seq__19739_19743 = G__19755;
chunk__19740_19744 = G__19756;
count__19741_19745 = G__19757;
i__19742_19746 = G__19758;
continue;
}
} else
{var n_19759 = cljs.core.first.call(null,seq__19739_19753__$1);n_19759.removeAttribute(cljs.core.name.call(null,name));
{
var G__19760 = cljs.core.next.call(null,seq__19739_19753__$1);
var G__19761 = null;
var G__19762 = (0);
var G__19763 = (0);
seq__19739_19743 = G__19760;
chunk__19740_19744 = G__19761;
count__19741_19745 = G__19762;
i__19742_19746 = G__19763;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19765 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19765,(0),null);var v = cljs.core.nth.call(null,vec__19765,(1),null);if(cljs.core.truth_((function (){var and__3627__auto__ = k;if(cljs.core.truth_(and__3627__auto__))
{return v;
} else
{return and__3627__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__19766_SHARP_){var attr = attrs__$1.item(p1__19766_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19773_19779 = cljs.core.seq.call(null,styles);var chunk__19774_19780 = null;var count__19775_19781 = (0);var i__19776_19782 = (0);while(true){
if((i__19776_19782 < count__19775_19781))
{var vec__19777_19783 = cljs.core._nth.call(null,chunk__19774_19780,i__19776_19782);var name_19784 = cljs.core.nth.call(null,vec__19777_19783,(0),null);var value_19785 = cljs.core.nth.call(null,vec__19777_19783,(1),null);domina.set_style_BANG_.call(null,content,name_19784,value_19785);
{
var G__19786 = seq__19773_19779;
var G__19787 = chunk__19774_19780;
var G__19788 = count__19775_19781;
var G__19789 = (i__19776_19782 + (1));
seq__19773_19779 = G__19786;
chunk__19774_19780 = G__19787;
count__19775_19781 = G__19788;
i__19776_19782 = G__19789;
continue;
}
} else
{var temp__4126__auto___19790 = cljs.core.seq.call(null,seq__19773_19779);if(temp__4126__auto___19790)
{var seq__19773_19791__$1 = temp__4126__auto___19790;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19773_19791__$1))
{var c__4408__auto___19792 = cljs.core.chunk_first.call(null,seq__19773_19791__$1);{
var G__19793 = cljs.core.chunk_rest.call(null,seq__19773_19791__$1);
var G__19794 = c__4408__auto___19792;
var G__19795 = cljs.core.count.call(null,c__4408__auto___19792);
var G__19796 = (0);
seq__19773_19779 = G__19793;
chunk__19774_19780 = G__19794;
count__19775_19781 = G__19795;
i__19776_19782 = G__19796;
continue;
}
} else
{var vec__19778_19797 = cljs.core.first.call(null,seq__19773_19791__$1);var name_19798 = cljs.core.nth.call(null,vec__19778_19797,(0),null);var value_19799 = cljs.core.nth.call(null,vec__19778_19797,(1),null);domina.set_style_BANG_.call(null,content,name_19798,value_19799);
{
var G__19800 = cljs.core.next.call(null,seq__19773_19791__$1);
var G__19801 = null;
var G__19802 = (0);
var G__19803 = (0);
seq__19773_19779 = G__19800;
chunk__19774_19780 = G__19801;
count__19775_19781 = G__19802;
i__19776_19782 = G__19803;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19810_19816 = cljs.core.seq.call(null,attrs);var chunk__19811_19817 = null;var count__19812_19818 = (0);var i__19813_19819 = (0);while(true){
if((i__19813_19819 < count__19812_19818))
{var vec__19814_19820 = cljs.core._nth.call(null,chunk__19811_19817,i__19813_19819);var name_19821 = cljs.core.nth.call(null,vec__19814_19820,(0),null);var value_19822 = cljs.core.nth.call(null,vec__19814_19820,(1),null);domina.set_attr_BANG_.call(null,content,name_19821,value_19822);
{
var G__19823 = seq__19810_19816;
var G__19824 = chunk__19811_19817;
var G__19825 = count__19812_19818;
var G__19826 = (i__19813_19819 + (1));
seq__19810_19816 = G__19823;
chunk__19811_19817 = G__19824;
count__19812_19818 = G__19825;
i__19813_19819 = G__19826;
continue;
}
} else
{var temp__4126__auto___19827 = cljs.core.seq.call(null,seq__19810_19816);if(temp__4126__auto___19827)
{var seq__19810_19828__$1 = temp__4126__auto___19827;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19810_19828__$1))
{var c__4408__auto___19829 = cljs.core.chunk_first.call(null,seq__19810_19828__$1);{
var G__19830 = cljs.core.chunk_rest.call(null,seq__19810_19828__$1);
var G__19831 = c__4408__auto___19829;
var G__19832 = cljs.core.count.call(null,c__4408__auto___19829);
var G__19833 = (0);
seq__19810_19816 = G__19830;
chunk__19811_19817 = G__19831;
count__19812_19818 = G__19832;
i__19813_19819 = G__19833;
continue;
}
} else
{var vec__19815_19834 = cljs.core.first.call(null,seq__19810_19828__$1);var name_19835 = cljs.core.nth.call(null,vec__19815_19834,(0),null);var value_19836 = cljs.core.nth.call(null,vec__19815_19834,(1),null);domina.set_attr_BANG_.call(null,content,name_19835,value_19836);
{
var G__19837 = cljs.core.next.call(null,seq__19810_19828__$1);
var G__19838 = null;
var G__19839 = (0);
var G__19840 = (0);
seq__19810_19816 = G__19837;
chunk__19811_19817 = G__19838;
count__19812_19818 = G__19839;
i__19813_19819 = G__19840;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19845_19849 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19846_19850 = null;var count__19847_19851 = (0);var i__19848_19852 = (0);while(true){
if((i__19848_19852 < count__19847_19851))
{var node_19853 = cljs.core._nth.call(null,chunk__19846_19850,i__19848_19852);goog.dom.classes.add(node_19853,class$);
{
var G__19854 = seq__19845_19849;
var G__19855 = chunk__19846_19850;
var G__19856 = count__19847_19851;
var G__19857 = (i__19848_19852 + (1));
seq__19845_19849 = G__19854;
chunk__19846_19850 = G__19855;
count__19847_19851 = G__19856;
i__19848_19852 = G__19857;
continue;
}
} else
{var temp__4126__auto___19858 = cljs.core.seq.call(null,seq__19845_19849);if(temp__4126__auto___19858)
{var seq__19845_19859__$1 = temp__4126__auto___19858;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19845_19859__$1))
{var c__4408__auto___19860 = cljs.core.chunk_first.call(null,seq__19845_19859__$1);{
var G__19861 = cljs.core.chunk_rest.call(null,seq__19845_19859__$1);
var G__19862 = c__4408__auto___19860;
var G__19863 = cljs.core.count.call(null,c__4408__auto___19860);
var G__19864 = (0);
seq__19845_19849 = G__19861;
chunk__19846_19850 = G__19862;
count__19847_19851 = G__19863;
i__19848_19852 = G__19864;
continue;
}
} else
{var node_19865 = cljs.core.first.call(null,seq__19845_19859__$1);goog.dom.classes.add(node_19865,class$);
{
var G__19866 = cljs.core.next.call(null,seq__19845_19859__$1);
var G__19867 = null;
var G__19868 = (0);
var G__19869 = (0);
seq__19845_19849 = G__19866;
chunk__19846_19850 = G__19867;
count__19847_19851 = G__19868;
i__19848_19852 = G__19869;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19874_19878 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19875_19879 = null;var count__19876_19880 = (0);var i__19877_19881 = (0);while(true){
if((i__19877_19881 < count__19876_19880))
{var node_19882 = cljs.core._nth.call(null,chunk__19875_19879,i__19877_19881);goog.dom.classes.remove(node_19882,class$);
{
var G__19883 = seq__19874_19878;
var G__19884 = chunk__19875_19879;
var G__19885 = count__19876_19880;
var G__19886 = (i__19877_19881 + (1));
seq__19874_19878 = G__19883;
chunk__19875_19879 = G__19884;
count__19876_19880 = G__19885;
i__19877_19881 = G__19886;
continue;
}
} else
{var temp__4126__auto___19887 = cljs.core.seq.call(null,seq__19874_19878);if(temp__4126__auto___19887)
{var seq__19874_19888__$1 = temp__4126__auto___19887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19874_19888__$1))
{var c__4408__auto___19889 = cljs.core.chunk_first.call(null,seq__19874_19888__$1);{
var G__19890 = cljs.core.chunk_rest.call(null,seq__19874_19888__$1);
var G__19891 = c__4408__auto___19889;
var G__19892 = cljs.core.count.call(null,c__4408__auto___19889);
var G__19893 = (0);
seq__19874_19878 = G__19890;
chunk__19875_19879 = G__19891;
count__19876_19880 = G__19892;
i__19877_19881 = G__19893;
continue;
}
} else
{var node_19894 = cljs.core.first.call(null,seq__19874_19888__$1);goog.dom.classes.remove(node_19894,class$);
{
var G__19895 = cljs.core.next.call(null,seq__19874_19888__$1);
var G__19896 = null;
var G__19897 = (0);
var G__19898 = (0);
seq__19874_19878 = G__19895;
chunk__19875_19879 = G__19896;
count__19876_19880 = G__19897;
i__19877_19881 = G__19898;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19903_19907 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19904_19908 = null;var count__19905_19909 = (0);var i__19906_19910 = (0);while(true){
if((i__19906_19910 < count__19905_19909))
{var node_19911 = cljs.core._nth.call(null,chunk__19904_19908,i__19906_19910);goog.dom.classes.toggle(node_19911,class$);
{
var G__19912 = seq__19903_19907;
var G__19913 = chunk__19904_19908;
var G__19914 = count__19905_19909;
var G__19915 = (i__19906_19910 + (1));
seq__19903_19907 = G__19912;
chunk__19904_19908 = G__19913;
count__19905_19909 = G__19914;
i__19906_19910 = G__19915;
continue;
}
} else
{var temp__4126__auto___19916 = cljs.core.seq.call(null,seq__19903_19907);if(temp__4126__auto___19916)
{var seq__19903_19917__$1 = temp__4126__auto___19916;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19903_19917__$1))
{var c__4408__auto___19918 = cljs.core.chunk_first.call(null,seq__19903_19917__$1);{
var G__19919 = cljs.core.chunk_rest.call(null,seq__19903_19917__$1);
var G__19920 = c__4408__auto___19918;
var G__19921 = cljs.core.count.call(null,c__4408__auto___19918);
var G__19922 = (0);
seq__19903_19907 = G__19919;
chunk__19904_19908 = G__19920;
count__19905_19909 = G__19921;
i__19906_19910 = G__19922;
continue;
}
} else
{var node_19923 = cljs.core.first.call(null,seq__19903_19917__$1);goog.dom.classes.toggle(node_19923,class$);
{
var G__19924 = cljs.core.next.call(null,seq__19903_19917__$1);
var G__19925 = null;
var G__19926 = (0);
var G__19927 = (0);
seq__19903_19907 = G__19924;
chunk__19904_19908 = G__19925;
count__19905_19909 = G__19926;
i__19906_19910 = G__19927;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19936__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19932_19937 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19933_19938 = null;var count__19934_19939 = (0);var i__19935_19940 = (0);while(true){
if((i__19935_19940 < count__19934_19939))
{var node_19941 = cljs.core._nth.call(null,chunk__19933_19938,i__19935_19940);goog.dom.classes.set(node_19941,classes_19936__$1);
{
var G__19942 = seq__19932_19937;
var G__19943 = chunk__19933_19938;
var G__19944 = count__19934_19939;
var G__19945 = (i__19935_19940 + (1));
seq__19932_19937 = G__19942;
chunk__19933_19938 = G__19943;
count__19934_19939 = G__19944;
i__19935_19940 = G__19945;
continue;
}
} else
{var temp__4126__auto___19946 = cljs.core.seq.call(null,seq__19932_19937);if(temp__4126__auto___19946)
{var seq__19932_19947__$1 = temp__4126__auto___19946;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19932_19947__$1))
{var c__4408__auto___19948 = cljs.core.chunk_first.call(null,seq__19932_19947__$1);{
var G__19949 = cljs.core.chunk_rest.call(null,seq__19932_19947__$1);
var G__19950 = c__4408__auto___19948;
var G__19951 = cljs.core.count.call(null,c__4408__auto___19948);
var G__19952 = (0);
seq__19932_19937 = G__19949;
chunk__19933_19938 = G__19950;
count__19934_19939 = G__19951;
i__19935_19940 = G__19952;
continue;
}
} else
{var node_19953 = cljs.core.first.call(null,seq__19932_19947__$1);goog.dom.classes.set(node_19953,classes_19936__$1);
{
var G__19954 = cljs.core.next.call(null,seq__19932_19947__$1);
var G__19955 = null;
var G__19956 = (0);
var G__19957 = (0);
seq__19932_19937 = G__19954;
chunk__19933_19938 = G__19955;
count__19934_19939 = G__19956;
i__19935_19940 = G__19957;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19962_19966 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19963_19967 = null;var count__19964_19968 = (0);var i__19965_19969 = (0);while(true){
if((i__19965_19969 < count__19964_19968))
{var node_19970 = cljs.core._nth.call(null,chunk__19963_19967,i__19965_19969);goog.dom.setTextContent(node_19970,value);
{
var G__19971 = seq__19962_19966;
var G__19972 = chunk__19963_19967;
var G__19973 = count__19964_19968;
var G__19974 = (i__19965_19969 + (1));
seq__19962_19966 = G__19971;
chunk__19963_19967 = G__19972;
count__19964_19968 = G__19973;
i__19965_19969 = G__19974;
continue;
}
} else
{var temp__4126__auto___19975 = cljs.core.seq.call(null,seq__19962_19966);if(temp__4126__auto___19975)
{var seq__19962_19976__$1 = temp__4126__auto___19975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19962_19976__$1))
{var c__4408__auto___19977 = cljs.core.chunk_first.call(null,seq__19962_19976__$1);{
var G__19978 = cljs.core.chunk_rest.call(null,seq__19962_19976__$1);
var G__19979 = c__4408__auto___19977;
var G__19980 = cljs.core.count.call(null,c__4408__auto___19977);
var G__19981 = (0);
seq__19962_19966 = G__19978;
chunk__19963_19967 = G__19979;
count__19964_19968 = G__19980;
i__19965_19969 = G__19981;
continue;
}
} else
{var node_19982 = cljs.core.first.call(null,seq__19962_19976__$1);goog.dom.setTextContent(node_19982,value);
{
var G__19983 = cljs.core.next.call(null,seq__19962_19976__$1);
var G__19984 = null;
var G__19985 = (0);
var G__19986 = (0);
seq__19962_19966 = G__19983;
chunk__19963_19967 = G__19984;
count__19964_19968 = G__19985;
i__19965_19969 = G__19986;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19991_19995 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19992_19996 = null;var count__19993_19997 = (0);var i__19994_19998 = (0);while(true){
if((i__19994_19998 < count__19993_19997))
{var node_19999 = cljs.core._nth.call(null,chunk__19992_19996,i__19994_19998);goog.dom.forms.setValue(node_19999,value);
{
var G__20000 = seq__19991_19995;
var G__20001 = chunk__19992_19996;
var G__20002 = count__19993_19997;
var G__20003 = (i__19994_19998 + (1));
seq__19991_19995 = G__20000;
chunk__19992_19996 = G__20001;
count__19993_19997 = G__20002;
i__19994_19998 = G__20003;
continue;
}
} else
{var temp__4126__auto___20004 = cljs.core.seq.call(null,seq__19991_19995);if(temp__4126__auto___20004)
{var seq__19991_20005__$1 = temp__4126__auto___20004;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19991_20005__$1))
{var c__4408__auto___20006 = cljs.core.chunk_first.call(null,seq__19991_20005__$1);{
var G__20007 = cljs.core.chunk_rest.call(null,seq__19991_20005__$1);
var G__20008 = c__4408__auto___20006;
var G__20009 = cljs.core.count.call(null,c__4408__auto___20006);
var G__20010 = (0);
seq__19991_19995 = G__20007;
chunk__19992_19996 = G__20008;
count__19993_19997 = G__20009;
i__19994_19998 = G__20010;
continue;
}
} else
{var node_20011 = cljs.core.first.call(null,seq__19991_20005__$1);goog.dom.forms.setValue(node_20011,value);
{
var G__20012 = cljs.core.next.call(null,seq__19991_20005__$1);
var G__20013 = null;
var G__20014 = (0);
var G__20015 = (0);
seq__19991_19995 = G__20012;
chunk__19992_19996 = G__20013;
count__19993_19997 = G__20014;
i__19994_19998 = G__20015;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3627__auto__ = allows_inner_html_QMARK_;if(and__3627__auto__)
{var and__3627__auto____$1 = (function (){var or__3639__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3627__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
})()))
{var value_20026 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20022_20027 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20023_20028 = null;var count__20024_20029 = (0);var i__20025_20030 = (0);while(true){
if((i__20025_20030 < count__20024_20029))
{var node_20031 = cljs.core._nth.call(null,chunk__20023_20028,i__20025_20030);node_20031.innerHTML = value_20026;
{
var G__20032 = seq__20022_20027;
var G__20033 = chunk__20023_20028;
var G__20034 = count__20024_20029;
var G__20035 = (i__20025_20030 + (1));
seq__20022_20027 = G__20032;
chunk__20023_20028 = G__20033;
count__20024_20029 = G__20034;
i__20025_20030 = G__20035;
continue;
}
} else
{var temp__4126__auto___20036 = cljs.core.seq.call(null,seq__20022_20027);if(temp__4126__auto___20036)
{var seq__20022_20037__$1 = temp__4126__auto___20036;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20022_20037__$1))
{var c__4408__auto___20038 = cljs.core.chunk_first.call(null,seq__20022_20037__$1);{
var G__20039 = cljs.core.chunk_rest.call(null,seq__20022_20037__$1);
var G__20040 = c__4408__auto___20038;
var G__20041 = cljs.core.count.call(null,c__4408__auto___20038);
var G__20042 = (0);
seq__20022_20027 = G__20039;
chunk__20023_20028 = G__20040;
count__20024_20029 = G__20041;
i__20025_20030 = G__20042;
continue;
}
} else
{var node_20043 = cljs.core.first.call(null,seq__20022_20037__$1);node_20043.innerHTML = value_20026;
{
var G__20044 = cljs.core.next.call(null,seq__20022_20037__$1);
var G__20045 = null;
var G__20046 = (0);
var G__20047 = (0);
seq__20022_20027 = G__20044;
chunk__20023_20028 = G__20045;
count__20024_20029 = G__20046;
i__20025_20030 = G__20047;
continue;
}
}
} else
{}
}
break;
}
}catch (e20021){if((e20021 instanceof Error))
{var e_20048 = e20021;domina.replace_children_BANG_.call(null,content,value_20026);
} else
{throw e20021;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3627__auto__ = bubble;if(cljs.core.truth_(and__3627__auto__))
{return (value == null);
} else
{return and__3627__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3639__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20055_20059 = cljs.core.seq.call(null,children);var chunk__20056_20060 = null;var count__20057_20061 = (0);var i__20058_20062 = (0);while(true){
if((i__20058_20062 < count__20057_20061))
{var child_20063 = cljs.core._nth.call(null,chunk__20056_20060,i__20058_20062);frag.appendChild(child_20063);
{
var G__20064 = seq__20055_20059;
var G__20065 = chunk__20056_20060;
var G__20066 = count__20057_20061;
var G__20067 = (i__20058_20062 + (1));
seq__20055_20059 = G__20064;
chunk__20056_20060 = G__20065;
count__20057_20061 = G__20066;
i__20058_20062 = G__20067;
continue;
}
} else
{var temp__4126__auto___20068 = cljs.core.seq.call(null,seq__20055_20059);if(temp__4126__auto___20068)
{var seq__20055_20069__$1 = temp__4126__auto___20068;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20055_20069__$1))
{var c__4408__auto___20070 = cljs.core.chunk_first.call(null,seq__20055_20069__$1);{
var G__20071 = cljs.core.chunk_rest.call(null,seq__20055_20069__$1);
var G__20072 = c__4408__auto___20070;
var G__20073 = cljs.core.count.call(null,c__4408__auto___20070);
var G__20074 = (0);
seq__20055_20059 = G__20071;
chunk__20056_20060 = G__20072;
count__20057_20061 = G__20073;
i__20058_20062 = G__20074;
continue;
}
} else
{var child_20075 = cljs.core.first.call(null,seq__20055_20069__$1);frag.appendChild(child_20075);
{
var G__20076 = cljs.core.next.call(null,seq__20055_20069__$1);
var G__20077 = null;
var G__20078 = (0);
var G__20079 = (0);
seq__20055_20059 = G__20076;
chunk__20056_20060 = G__20077;
count__20057_20061 = G__20078;
i__20058_20062 = G__20079;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__20049_SHARP_,p2__20050_SHARP_){return f.call(null,p1__20049_SHARP_,p2__20050_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3627__auto__ = obj;if(cljs.core.truth_(and__3627__auto__))
{var and__3627__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3627__auto____$1)
{return obj.length;
} else
{return and__3627__auto____$1;
}
} else
{return and__3627__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20081 = list_thing;if(G__20081)
{var bit__4302__auto__ = (G__20081.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20081.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20081.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20081);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20081);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__20082 = content;if(G__20082)
{var bit__4302__auto__ = (G__20082.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20082.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20082.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20082);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20082);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__20083 = content;if(G__20083)
{var bit__4302__auto__ = (G__20083.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4302__auto__) || (G__20083.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20083.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20083);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20083);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
