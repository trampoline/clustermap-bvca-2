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
var opt_wrapper_19635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19636 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_19637 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19637,opt_wrapper_19635,table_section_wrapper_19636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19635,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19636,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19636,cell_wrapper_19637,table_section_wrapper_19636,table_section_wrapper_19636]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3619__auto__ = div.firstChild;if(cljs.core.truth_(and__3619__auto__))
{return div.firstChild.childNodes;
} else
{return and__3619__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__19642 = cljs.core.seq.call(null,tbody);var chunk__19643 = null;var count__19644 = (0);var i__19645 = (0);while(true){
if((i__19645 < count__19644))
{var child = cljs.core._nth.call(null,chunk__19643,i__19645);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19646 = seq__19642;
var G__19647 = chunk__19643;
var G__19648 = count__19644;
var G__19649 = (i__19645 + (1));
seq__19642 = G__19646;
chunk__19643 = G__19647;
count__19644 = G__19648;
i__19645 = G__19649;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__19642);if(temp__4126__auto__)
{var seq__19642__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19642__$1))
{var c__4400__auto__ = cljs.core.chunk_first.call(null,seq__19642__$1);{
var G__19650 = cljs.core.chunk_rest.call(null,seq__19642__$1);
var G__19651 = c__4400__auto__;
var G__19652 = cljs.core.count.call(null,c__4400__auto__);
var G__19653 = (0);
seq__19642 = G__19650;
chunk__19643 = G__19651;
count__19644 = G__19652;
i__19645 = G__19653;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19642__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19654 = cljs.core.next.call(null,seq__19642__$1);
var G__19655 = null;
var G__19656 = (0);
var G__19657 = (0);
seq__19642 = G__19654;
chunk__19643 = G__19655;
count__19644 = G__19656;
i__19645 = G__19657;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__19659 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19659,(0),null);var start_wrap = cljs.core.nth.call(null,vec__19659,(1),null);var end_wrap = cljs.core.nth.call(null,vec__19659,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__19660 = wrapper.lastChild;
var G__19661 = (level - (1));
wrapper = G__19660;
level = G__19661;
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
if(cljs.core.truth_((function (){var and__3619__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3619__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3619__auto__;
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
domina.DomContent = (function (){var obj19663 = {};return obj19663;
})();
domina.nodes = (function nodes(content){if((function (){var and__3619__auto__ = content;if(and__3619__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3619__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4267__auto__ = (((content == null))?null:content);return (function (){var or__3631__auto__ = (domina.nodes[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.nodes["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3619__auto__ = nodeseq;if(and__3619__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3619__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4267__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3631__auto__ = (domina.single_node[goog.typeOf(x__4267__auto__)]);if(or__3631__auto__)
{return or__3631__auto__;
} else
{var or__3631__auto____$1 = (domina.single_node["_"]);if(or__3631__auto____$1)
{return or__3631__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3619__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3619__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3619__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19664){
var mesg = cljs.core.seq(arglist__19664);
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
log.cljs$lang$applyTo = (function (arglist__19665){
var mesg = cljs.core.seq(arglist__19665);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19666){
var contents = cljs.core.seq(arglist__19666);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19667_SHARP_){return p1__19667_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19668_SHARP_,p2__19669_SHARP_){return goog.dom.insertChildAt(p1__19668_SHARP_,p2__19669_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19671_SHARP_,p2__19670_SHARP_){return goog.dom.insertSiblingBefore(p2__19670_SHARP_,p1__19671_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19673_SHARP_,p2__19672_SHARP_){return goog.dom.insertSiblingAfter(p2__19672_SHARP_,p1__19673_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19675_SHARP_,p2__19674_SHARP_){return goog.dom.replaceNode(p2__19674_SHARP_,p1__19675_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19680_19684 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19681_19685 = null;var count__19682_19686 = (0);var i__19683_19687 = (0);while(true){
if((i__19683_19687 < count__19682_19686))
{var n_19688 = cljs.core._nth.call(null,chunk__19681_19685,i__19683_19687);goog.style.setStyle(n_19688,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19689 = seq__19680_19684;
var G__19690 = chunk__19681_19685;
var G__19691 = count__19682_19686;
var G__19692 = (i__19683_19687 + (1));
seq__19680_19684 = G__19689;
chunk__19681_19685 = G__19690;
count__19682_19686 = G__19691;
i__19683_19687 = G__19692;
continue;
}
} else
{var temp__4126__auto___19693 = cljs.core.seq.call(null,seq__19680_19684);if(temp__4126__auto___19693)
{var seq__19680_19694__$1 = temp__4126__auto___19693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19680_19694__$1))
{var c__4400__auto___19695 = cljs.core.chunk_first.call(null,seq__19680_19694__$1);{
var G__19696 = cljs.core.chunk_rest.call(null,seq__19680_19694__$1);
var G__19697 = c__4400__auto___19695;
var G__19698 = cljs.core.count.call(null,c__4400__auto___19695);
var G__19699 = (0);
seq__19680_19684 = G__19696;
chunk__19681_19685 = G__19697;
count__19682_19686 = G__19698;
i__19683_19687 = G__19699;
continue;
}
} else
{var n_19700 = cljs.core.first.call(null,seq__19680_19694__$1);goog.style.setStyle(n_19700,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19701 = cljs.core.next.call(null,seq__19680_19694__$1);
var G__19702 = null;
var G__19703 = (0);
var G__19704 = (0);
seq__19680_19684 = G__19701;
chunk__19681_19685 = G__19702;
count__19682_19686 = G__19703;
i__19683_19687 = G__19704;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19705){
var content = cljs.core.first(arglist__19705);
arglist__19705 = cljs.core.next(arglist__19705);
var name = cljs.core.first(arglist__19705);
var value = cljs.core.rest(arglist__19705);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19710_19714 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19711_19715 = null;var count__19712_19716 = (0);var i__19713_19717 = (0);while(true){
if((i__19713_19717 < count__19712_19716))
{var n_19718 = cljs.core._nth.call(null,chunk__19711_19715,i__19713_19717);n_19718.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19719 = seq__19710_19714;
var G__19720 = chunk__19711_19715;
var G__19721 = count__19712_19716;
var G__19722 = (i__19713_19717 + (1));
seq__19710_19714 = G__19719;
chunk__19711_19715 = G__19720;
count__19712_19716 = G__19721;
i__19713_19717 = G__19722;
continue;
}
} else
{var temp__4126__auto___19723 = cljs.core.seq.call(null,seq__19710_19714);if(temp__4126__auto___19723)
{var seq__19710_19724__$1 = temp__4126__auto___19723;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19710_19724__$1))
{var c__4400__auto___19725 = cljs.core.chunk_first.call(null,seq__19710_19724__$1);{
var G__19726 = cljs.core.chunk_rest.call(null,seq__19710_19724__$1);
var G__19727 = c__4400__auto___19725;
var G__19728 = cljs.core.count.call(null,c__4400__auto___19725);
var G__19729 = (0);
seq__19710_19714 = G__19726;
chunk__19711_19715 = G__19727;
count__19712_19716 = G__19728;
i__19713_19717 = G__19729;
continue;
}
} else
{var n_19730 = cljs.core.first.call(null,seq__19710_19724__$1);n_19730.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19731 = cljs.core.next.call(null,seq__19710_19724__$1);
var G__19732 = null;
var G__19733 = (0);
var G__19734 = (0);
seq__19710_19714 = G__19731;
chunk__19711_19715 = G__19732;
count__19712_19716 = G__19733;
i__19713_19717 = G__19734;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19735){
var content = cljs.core.first(arglist__19735);
arglist__19735 = cljs.core.next(arglist__19735);
var name = cljs.core.first(arglist__19735);
var value = cljs.core.rest(arglist__19735);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19740_19744 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19741_19745 = null;var count__19742_19746 = (0);var i__19743_19747 = (0);while(true){
if((i__19743_19747 < count__19742_19746))
{var n_19748 = cljs.core._nth.call(null,chunk__19741_19745,i__19743_19747);n_19748.removeAttribute(cljs.core.name.call(null,name));
{
var G__19749 = seq__19740_19744;
var G__19750 = chunk__19741_19745;
var G__19751 = count__19742_19746;
var G__19752 = (i__19743_19747 + (1));
seq__19740_19744 = G__19749;
chunk__19741_19745 = G__19750;
count__19742_19746 = G__19751;
i__19743_19747 = G__19752;
continue;
}
} else
{var temp__4126__auto___19753 = cljs.core.seq.call(null,seq__19740_19744);if(temp__4126__auto___19753)
{var seq__19740_19754__$1 = temp__4126__auto___19753;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19740_19754__$1))
{var c__4400__auto___19755 = cljs.core.chunk_first.call(null,seq__19740_19754__$1);{
var G__19756 = cljs.core.chunk_rest.call(null,seq__19740_19754__$1);
var G__19757 = c__4400__auto___19755;
var G__19758 = cljs.core.count.call(null,c__4400__auto___19755);
var G__19759 = (0);
seq__19740_19744 = G__19756;
chunk__19741_19745 = G__19757;
count__19742_19746 = G__19758;
i__19743_19747 = G__19759;
continue;
}
} else
{var n_19760 = cljs.core.first.call(null,seq__19740_19754__$1);n_19760.removeAttribute(cljs.core.name.call(null,name));
{
var G__19761 = cljs.core.next.call(null,seq__19740_19754__$1);
var G__19762 = null;
var G__19763 = (0);
var G__19764 = (0);
seq__19740_19744 = G__19761;
chunk__19741_19745 = G__19762;
count__19742_19746 = G__19763;
i__19743_19747 = G__19764;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19766 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19766,(0),null);var v = cljs.core.nth.call(null,vec__19766,(1),null);if(cljs.core.truth_((function (){var and__3619__auto__ = k;if(cljs.core.truth_(and__3619__auto__))
{return v;
} else
{return and__3619__auto__;
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
return (function (p1__19767_SHARP_){var attr = attrs__$1.item(p1__19767_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19774_19780 = cljs.core.seq.call(null,styles);var chunk__19775_19781 = null;var count__19776_19782 = (0);var i__19777_19783 = (0);while(true){
if((i__19777_19783 < count__19776_19782))
{var vec__19778_19784 = cljs.core._nth.call(null,chunk__19775_19781,i__19777_19783);var name_19785 = cljs.core.nth.call(null,vec__19778_19784,(0),null);var value_19786 = cljs.core.nth.call(null,vec__19778_19784,(1),null);domina.set_style_BANG_.call(null,content,name_19785,value_19786);
{
var G__19787 = seq__19774_19780;
var G__19788 = chunk__19775_19781;
var G__19789 = count__19776_19782;
var G__19790 = (i__19777_19783 + (1));
seq__19774_19780 = G__19787;
chunk__19775_19781 = G__19788;
count__19776_19782 = G__19789;
i__19777_19783 = G__19790;
continue;
}
} else
{var temp__4126__auto___19791 = cljs.core.seq.call(null,seq__19774_19780);if(temp__4126__auto___19791)
{var seq__19774_19792__$1 = temp__4126__auto___19791;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19774_19792__$1))
{var c__4400__auto___19793 = cljs.core.chunk_first.call(null,seq__19774_19792__$1);{
var G__19794 = cljs.core.chunk_rest.call(null,seq__19774_19792__$1);
var G__19795 = c__4400__auto___19793;
var G__19796 = cljs.core.count.call(null,c__4400__auto___19793);
var G__19797 = (0);
seq__19774_19780 = G__19794;
chunk__19775_19781 = G__19795;
count__19776_19782 = G__19796;
i__19777_19783 = G__19797;
continue;
}
} else
{var vec__19779_19798 = cljs.core.first.call(null,seq__19774_19792__$1);var name_19799 = cljs.core.nth.call(null,vec__19779_19798,(0),null);var value_19800 = cljs.core.nth.call(null,vec__19779_19798,(1),null);domina.set_style_BANG_.call(null,content,name_19799,value_19800);
{
var G__19801 = cljs.core.next.call(null,seq__19774_19792__$1);
var G__19802 = null;
var G__19803 = (0);
var G__19804 = (0);
seq__19774_19780 = G__19801;
chunk__19775_19781 = G__19802;
count__19776_19782 = G__19803;
i__19777_19783 = G__19804;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19811_19817 = cljs.core.seq.call(null,attrs);var chunk__19812_19818 = null;var count__19813_19819 = (0);var i__19814_19820 = (0);while(true){
if((i__19814_19820 < count__19813_19819))
{var vec__19815_19821 = cljs.core._nth.call(null,chunk__19812_19818,i__19814_19820);var name_19822 = cljs.core.nth.call(null,vec__19815_19821,(0),null);var value_19823 = cljs.core.nth.call(null,vec__19815_19821,(1),null);domina.set_attr_BANG_.call(null,content,name_19822,value_19823);
{
var G__19824 = seq__19811_19817;
var G__19825 = chunk__19812_19818;
var G__19826 = count__19813_19819;
var G__19827 = (i__19814_19820 + (1));
seq__19811_19817 = G__19824;
chunk__19812_19818 = G__19825;
count__19813_19819 = G__19826;
i__19814_19820 = G__19827;
continue;
}
} else
{var temp__4126__auto___19828 = cljs.core.seq.call(null,seq__19811_19817);if(temp__4126__auto___19828)
{var seq__19811_19829__$1 = temp__4126__auto___19828;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19811_19829__$1))
{var c__4400__auto___19830 = cljs.core.chunk_first.call(null,seq__19811_19829__$1);{
var G__19831 = cljs.core.chunk_rest.call(null,seq__19811_19829__$1);
var G__19832 = c__4400__auto___19830;
var G__19833 = cljs.core.count.call(null,c__4400__auto___19830);
var G__19834 = (0);
seq__19811_19817 = G__19831;
chunk__19812_19818 = G__19832;
count__19813_19819 = G__19833;
i__19814_19820 = G__19834;
continue;
}
} else
{var vec__19816_19835 = cljs.core.first.call(null,seq__19811_19829__$1);var name_19836 = cljs.core.nth.call(null,vec__19816_19835,(0),null);var value_19837 = cljs.core.nth.call(null,vec__19816_19835,(1),null);domina.set_attr_BANG_.call(null,content,name_19836,value_19837);
{
var G__19838 = cljs.core.next.call(null,seq__19811_19829__$1);
var G__19839 = null;
var G__19840 = (0);
var G__19841 = (0);
seq__19811_19817 = G__19838;
chunk__19812_19818 = G__19839;
count__19813_19819 = G__19840;
i__19814_19820 = G__19841;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19846_19850 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19847_19851 = null;var count__19848_19852 = (0);var i__19849_19853 = (0);while(true){
if((i__19849_19853 < count__19848_19852))
{var node_19854 = cljs.core._nth.call(null,chunk__19847_19851,i__19849_19853);goog.dom.classes.add(node_19854,class$);
{
var G__19855 = seq__19846_19850;
var G__19856 = chunk__19847_19851;
var G__19857 = count__19848_19852;
var G__19858 = (i__19849_19853 + (1));
seq__19846_19850 = G__19855;
chunk__19847_19851 = G__19856;
count__19848_19852 = G__19857;
i__19849_19853 = G__19858;
continue;
}
} else
{var temp__4126__auto___19859 = cljs.core.seq.call(null,seq__19846_19850);if(temp__4126__auto___19859)
{var seq__19846_19860__$1 = temp__4126__auto___19859;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19846_19860__$1))
{var c__4400__auto___19861 = cljs.core.chunk_first.call(null,seq__19846_19860__$1);{
var G__19862 = cljs.core.chunk_rest.call(null,seq__19846_19860__$1);
var G__19863 = c__4400__auto___19861;
var G__19864 = cljs.core.count.call(null,c__4400__auto___19861);
var G__19865 = (0);
seq__19846_19850 = G__19862;
chunk__19847_19851 = G__19863;
count__19848_19852 = G__19864;
i__19849_19853 = G__19865;
continue;
}
} else
{var node_19866 = cljs.core.first.call(null,seq__19846_19860__$1);goog.dom.classes.add(node_19866,class$);
{
var G__19867 = cljs.core.next.call(null,seq__19846_19860__$1);
var G__19868 = null;
var G__19869 = (0);
var G__19870 = (0);
seq__19846_19850 = G__19867;
chunk__19847_19851 = G__19868;
count__19848_19852 = G__19869;
i__19849_19853 = G__19870;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19875_19879 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19876_19880 = null;var count__19877_19881 = (0);var i__19878_19882 = (0);while(true){
if((i__19878_19882 < count__19877_19881))
{var node_19883 = cljs.core._nth.call(null,chunk__19876_19880,i__19878_19882);goog.dom.classes.remove(node_19883,class$);
{
var G__19884 = seq__19875_19879;
var G__19885 = chunk__19876_19880;
var G__19886 = count__19877_19881;
var G__19887 = (i__19878_19882 + (1));
seq__19875_19879 = G__19884;
chunk__19876_19880 = G__19885;
count__19877_19881 = G__19886;
i__19878_19882 = G__19887;
continue;
}
} else
{var temp__4126__auto___19888 = cljs.core.seq.call(null,seq__19875_19879);if(temp__4126__auto___19888)
{var seq__19875_19889__$1 = temp__4126__auto___19888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19875_19889__$1))
{var c__4400__auto___19890 = cljs.core.chunk_first.call(null,seq__19875_19889__$1);{
var G__19891 = cljs.core.chunk_rest.call(null,seq__19875_19889__$1);
var G__19892 = c__4400__auto___19890;
var G__19893 = cljs.core.count.call(null,c__4400__auto___19890);
var G__19894 = (0);
seq__19875_19879 = G__19891;
chunk__19876_19880 = G__19892;
count__19877_19881 = G__19893;
i__19878_19882 = G__19894;
continue;
}
} else
{var node_19895 = cljs.core.first.call(null,seq__19875_19889__$1);goog.dom.classes.remove(node_19895,class$);
{
var G__19896 = cljs.core.next.call(null,seq__19875_19889__$1);
var G__19897 = null;
var G__19898 = (0);
var G__19899 = (0);
seq__19875_19879 = G__19896;
chunk__19876_19880 = G__19897;
count__19877_19881 = G__19898;
i__19878_19882 = G__19899;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19904_19908 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19905_19909 = null;var count__19906_19910 = (0);var i__19907_19911 = (0);while(true){
if((i__19907_19911 < count__19906_19910))
{var node_19912 = cljs.core._nth.call(null,chunk__19905_19909,i__19907_19911);goog.dom.classes.toggle(node_19912,class$);
{
var G__19913 = seq__19904_19908;
var G__19914 = chunk__19905_19909;
var G__19915 = count__19906_19910;
var G__19916 = (i__19907_19911 + (1));
seq__19904_19908 = G__19913;
chunk__19905_19909 = G__19914;
count__19906_19910 = G__19915;
i__19907_19911 = G__19916;
continue;
}
} else
{var temp__4126__auto___19917 = cljs.core.seq.call(null,seq__19904_19908);if(temp__4126__auto___19917)
{var seq__19904_19918__$1 = temp__4126__auto___19917;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19904_19918__$1))
{var c__4400__auto___19919 = cljs.core.chunk_first.call(null,seq__19904_19918__$1);{
var G__19920 = cljs.core.chunk_rest.call(null,seq__19904_19918__$1);
var G__19921 = c__4400__auto___19919;
var G__19922 = cljs.core.count.call(null,c__4400__auto___19919);
var G__19923 = (0);
seq__19904_19908 = G__19920;
chunk__19905_19909 = G__19921;
count__19906_19910 = G__19922;
i__19907_19911 = G__19923;
continue;
}
} else
{var node_19924 = cljs.core.first.call(null,seq__19904_19918__$1);goog.dom.classes.toggle(node_19924,class$);
{
var G__19925 = cljs.core.next.call(null,seq__19904_19918__$1);
var G__19926 = null;
var G__19927 = (0);
var G__19928 = (0);
seq__19904_19908 = G__19925;
chunk__19905_19909 = G__19926;
count__19906_19910 = G__19927;
i__19907_19911 = G__19928;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19937__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19933_19938 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19934_19939 = null;var count__19935_19940 = (0);var i__19936_19941 = (0);while(true){
if((i__19936_19941 < count__19935_19940))
{var node_19942 = cljs.core._nth.call(null,chunk__19934_19939,i__19936_19941);goog.dom.classes.set(node_19942,classes_19937__$1);
{
var G__19943 = seq__19933_19938;
var G__19944 = chunk__19934_19939;
var G__19945 = count__19935_19940;
var G__19946 = (i__19936_19941 + (1));
seq__19933_19938 = G__19943;
chunk__19934_19939 = G__19944;
count__19935_19940 = G__19945;
i__19936_19941 = G__19946;
continue;
}
} else
{var temp__4126__auto___19947 = cljs.core.seq.call(null,seq__19933_19938);if(temp__4126__auto___19947)
{var seq__19933_19948__$1 = temp__4126__auto___19947;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19933_19948__$1))
{var c__4400__auto___19949 = cljs.core.chunk_first.call(null,seq__19933_19948__$1);{
var G__19950 = cljs.core.chunk_rest.call(null,seq__19933_19948__$1);
var G__19951 = c__4400__auto___19949;
var G__19952 = cljs.core.count.call(null,c__4400__auto___19949);
var G__19953 = (0);
seq__19933_19938 = G__19950;
chunk__19934_19939 = G__19951;
count__19935_19940 = G__19952;
i__19936_19941 = G__19953;
continue;
}
} else
{var node_19954 = cljs.core.first.call(null,seq__19933_19948__$1);goog.dom.classes.set(node_19954,classes_19937__$1);
{
var G__19955 = cljs.core.next.call(null,seq__19933_19948__$1);
var G__19956 = null;
var G__19957 = (0);
var G__19958 = (0);
seq__19933_19938 = G__19955;
chunk__19934_19939 = G__19956;
count__19935_19940 = G__19957;
i__19936_19941 = G__19958;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19963_19967 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19964_19968 = null;var count__19965_19969 = (0);var i__19966_19970 = (0);while(true){
if((i__19966_19970 < count__19965_19969))
{var node_19971 = cljs.core._nth.call(null,chunk__19964_19968,i__19966_19970);goog.dom.setTextContent(node_19971,value);
{
var G__19972 = seq__19963_19967;
var G__19973 = chunk__19964_19968;
var G__19974 = count__19965_19969;
var G__19975 = (i__19966_19970 + (1));
seq__19963_19967 = G__19972;
chunk__19964_19968 = G__19973;
count__19965_19969 = G__19974;
i__19966_19970 = G__19975;
continue;
}
} else
{var temp__4126__auto___19976 = cljs.core.seq.call(null,seq__19963_19967);if(temp__4126__auto___19976)
{var seq__19963_19977__$1 = temp__4126__auto___19976;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19963_19977__$1))
{var c__4400__auto___19978 = cljs.core.chunk_first.call(null,seq__19963_19977__$1);{
var G__19979 = cljs.core.chunk_rest.call(null,seq__19963_19977__$1);
var G__19980 = c__4400__auto___19978;
var G__19981 = cljs.core.count.call(null,c__4400__auto___19978);
var G__19982 = (0);
seq__19963_19967 = G__19979;
chunk__19964_19968 = G__19980;
count__19965_19969 = G__19981;
i__19966_19970 = G__19982;
continue;
}
} else
{var node_19983 = cljs.core.first.call(null,seq__19963_19977__$1);goog.dom.setTextContent(node_19983,value);
{
var G__19984 = cljs.core.next.call(null,seq__19963_19977__$1);
var G__19985 = null;
var G__19986 = (0);
var G__19987 = (0);
seq__19963_19967 = G__19984;
chunk__19964_19968 = G__19985;
count__19965_19969 = G__19986;
i__19966_19970 = G__19987;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19992_19996 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19993_19997 = null;var count__19994_19998 = (0);var i__19995_19999 = (0);while(true){
if((i__19995_19999 < count__19994_19998))
{var node_20000 = cljs.core._nth.call(null,chunk__19993_19997,i__19995_19999);goog.dom.forms.setValue(node_20000,value);
{
var G__20001 = seq__19992_19996;
var G__20002 = chunk__19993_19997;
var G__20003 = count__19994_19998;
var G__20004 = (i__19995_19999 + (1));
seq__19992_19996 = G__20001;
chunk__19993_19997 = G__20002;
count__19994_19998 = G__20003;
i__19995_19999 = G__20004;
continue;
}
} else
{var temp__4126__auto___20005 = cljs.core.seq.call(null,seq__19992_19996);if(temp__4126__auto___20005)
{var seq__19992_20006__$1 = temp__4126__auto___20005;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19992_20006__$1))
{var c__4400__auto___20007 = cljs.core.chunk_first.call(null,seq__19992_20006__$1);{
var G__20008 = cljs.core.chunk_rest.call(null,seq__19992_20006__$1);
var G__20009 = c__4400__auto___20007;
var G__20010 = cljs.core.count.call(null,c__4400__auto___20007);
var G__20011 = (0);
seq__19992_19996 = G__20008;
chunk__19993_19997 = G__20009;
count__19994_19998 = G__20010;
i__19995_19999 = G__20011;
continue;
}
} else
{var node_20012 = cljs.core.first.call(null,seq__19992_20006__$1);goog.dom.forms.setValue(node_20012,value);
{
var G__20013 = cljs.core.next.call(null,seq__19992_20006__$1);
var G__20014 = null;
var G__20015 = (0);
var G__20016 = (0);
seq__19992_19996 = G__20013;
chunk__19993_19997 = G__20014;
count__19994_19998 = G__20015;
i__19995_19999 = G__20016;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3619__auto__ = allows_inner_html_QMARK_;if(and__3619__auto__)
{var and__3619__auto____$1 = (function (){var or__3631__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3619__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3619__auto____$1;
}
} else
{return and__3619__auto__;
}
})()))
{var value_20027 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__20023_20028 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__20024_20029 = null;var count__20025_20030 = (0);var i__20026_20031 = (0);while(true){
if((i__20026_20031 < count__20025_20030))
{var node_20032 = cljs.core._nth.call(null,chunk__20024_20029,i__20026_20031);node_20032.innerHTML = value_20027;
{
var G__20033 = seq__20023_20028;
var G__20034 = chunk__20024_20029;
var G__20035 = count__20025_20030;
var G__20036 = (i__20026_20031 + (1));
seq__20023_20028 = G__20033;
chunk__20024_20029 = G__20034;
count__20025_20030 = G__20035;
i__20026_20031 = G__20036;
continue;
}
} else
{var temp__4126__auto___20037 = cljs.core.seq.call(null,seq__20023_20028);if(temp__4126__auto___20037)
{var seq__20023_20038__$1 = temp__4126__auto___20037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20023_20038__$1))
{var c__4400__auto___20039 = cljs.core.chunk_first.call(null,seq__20023_20038__$1);{
var G__20040 = cljs.core.chunk_rest.call(null,seq__20023_20038__$1);
var G__20041 = c__4400__auto___20039;
var G__20042 = cljs.core.count.call(null,c__4400__auto___20039);
var G__20043 = (0);
seq__20023_20028 = G__20040;
chunk__20024_20029 = G__20041;
count__20025_20030 = G__20042;
i__20026_20031 = G__20043;
continue;
}
} else
{var node_20044 = cljs.core.first.call(null,seq__20023_20038__$1);node_20044.innerHTML = value_20027;
{
var G__20045 = cljs.core.next.call(null,seq__20023_20038__$1);
var G__20046 = null;
var G__20047 = (0);
var G__20048 = (0);
seq__20023_20028 = G__20045;
chunk__20024_20029 = G__20046;
count__20025_20030 = G__20047;
i__20026_20031 = G__20048;
continue;
}
}
} else
{}
}
break;
}
}catch (e20022){if((e20022 instanceof Error))
{var e_20049 = e20022;domina.replace_children_BANG_.call(null,content,value_20027);
} else
{throw e20022;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3619__auto__ = bubble;if(cljs.core.truth_(and__3619__auto__))
{return (value == null);
} else
{return and__3619__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3631__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3631__auto__))
{return or__3631__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__20056_20060 = cljs.core.seq.call(null,children);var chunk__20057_20061 = null;var count__20058_20062 = (0);var i__20059_20063 = (0);while(true){
if((i__20059_20063 < count__20058_20062))
{var child_20064 = cljs.core._nth.call(null,chunk__20057_20061,i__20059_20063);frag.appendChild(child_20064);
{
var G__20065 = seq__20056_20060;
var G__20066 = chunk__20057_20061;
var G__20067 = count__20058_20062;
var G__20068 = (i__20059_20063 + (1));
seq__20056_20060 = G__20065;
chunk__20057_20061 = G__20066;
count__20058_20062 = G__20067;
i__20059_20063 = G__20068;
continue;
}
} else
{var temp__4126__auto___20069 = cljs.core.seq.call(null,seq__20056_20060);if(temp__4126__auto___20069)
{var seq__20056_20070__$1 = temp__4126__auto___20069;if(cljs.core.chunked_seq_QMARK_.call(null,seq__20056_20070__$1))
{var c__4400__auto___20071 = cljs.core.chunk_first.call(null,seq__20056_20070__$1);{
var G__20072 = cljs.core.chunk_rest.call(null,seq__20056_20070__$1);
var G__20073 = c__4400__auto___20071;
var G__20074 = cljs.core.count.call(null,c__4400__auto___20071);
var G__20075 = (0);
seq__20056_20060 = G__20072;
chunk__20057_20061 = G__20073;
count__20058_20062 = G__20074;
i__20059_20063 = G__20075;
continue;
}
} else
{var child_20076 = cljs.core.first.call(null,seq__20056_20070__$1);frag.appendChild(child_20076);
{
var G__20077 = cljs.core.next.call(null,seq__20056_20070__$1);
var G__20078 = null;
var G__20079 = (0);
var G__20080 = (0);
seq__20056_20060 = G__20077;
chunk__20057_20061 = G__20078;
count__20058_20062 = G__20079;
i__20059_20063 = G__20080;
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
return (function (p1__20050_SHARP_,p2__20051_SHARP_){return f.call(null,p1__20050_SHARP_,p2__20051_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3619__auto__ = obj;if(cljs.core.truth_(and__3619__auto__))
{var and__3619__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3619__auto____$1)
{return obj.length;
} else
{return and__3619__auto____$1;
}
} else
{return and__3619__auto__;
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
{if((function (){var G__20082 = list_thing;if(G__20082)
{var bit__4294__auto__ = (G__20082.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4294__auto__) || (G__20082.cljs$core$ISeqable$))
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
{if((function (){var G__20083 = content;if(G__20083)
{var bit__4294__auto__ = (G__20083.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4294__auto__) || (G__20083.cljs$core$ISeqable$))
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
{if((function (){var G__20084 = content;if(G__20084)
{var bit__4294__auto__ = (G__20084.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4294__auto__) || (G__20084.cljs$core$ISeqable$))
{return true;
} else
{if((!G__20084.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20084);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__20084);
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
