// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_43742 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_43743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_43744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",cljs.core.constant$keyword$779,"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_43744,opt_wrapper_43742,table_section_wrapper_43743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_43742,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_43743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_43743,cell_wrapper_43744,table_section_wrapper_43743,table_section_wrapper_43743]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3529__auto__ = div.firstChild;if(cljs.core.truth_(and__3529__auto__))
{return div.firstChild.childNodes;
} else
{return and__3529__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__43749 = cljs.core.seq(tbody);var chunk__43750 = null;var count__43751 = (0);var i__43752 = (0);while(true){
if((i__43752 < count__43751))
{var child = chunk__43750.cljs$core$IIndexed$_nth$arity$2(null,i__43752);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43753 = seq__43749;
var G__43754 = chunk__43750;
var G__43755 = count__43751;
var G__43756 = (i__43752 + (1));
seq__43749 = G__43753;
chunk__43750 = G__43754;
count__43751 = G__43755;
i__43752 = G__43756;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__43749);if(temp__4126__auto__)
{var seq__43749__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__43749__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__43749__$1);{
var G__43757 = cljs.core.chunk_rest(seq__43749__$1);
var G__43758 = c__4297__auto__;
var G__43759 = cljs.core.count(c__4297__auto__);
var G__43760 = (0);
seq__43749 = G__43757;
chunk__43750 = G__43758;
count__43751 = G__43759;
i__43752 = G__43760;
continue;
}
} else
{var child = cljs.core.first(seq__43749__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__43761 = cljs.core.next(seq__43749__$1);
var G__43762 = null;
var G__43763 = (0);
var G__43764 = (0);
seq__43749 = G__43761;
chunk__43750 = G__43762;
count__43751 = G__43763;
i__43752 = G__43764;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))).toLowerCase();var vec__43766 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$779.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43766,(0),null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43766,(1),null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43766,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__43767 = wrapper.lastChild;
var G__43768 = (level - (1));
wrapper = G__43767;
level = G__43768;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3529__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3529__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_(div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s)))
{return domina.html_to_dom(s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj43770 = {};return obj43770;
})();
domina.nodes = (function nodes(content){if((function (){var and__3529__auto__ = content;if(and__3529__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3529__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4168__auto__ = (((content == null))?null:content);return (function (){var or__3541__auto__ = (domina.nodes[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.nodes["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3529__auto__ = nodeseq;if(and__3529__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3529__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4168__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3541__auto__ = (domina.single_node[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (domina.single_node["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3529__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3529__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3529__auto__;
}
})()))
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__43771){
var mesg = cljs.core.seq(arglist__43771);
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
{return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__43772){
var mesg = cljs.core.seq(arglist__43772);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name(id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(goog.dom.getElementsByClass(cljs.core.name(class_name))) : domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name(class_name))));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$2(goog.dom.getChildren,domina.nodes(content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__43773){
var contents = cljs.core.seq(arglist__43773);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43774_SHARP_){return p1__43774_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43775_SHARP_,p2__43776_SHARP_){return goog.dom.insertChildAt(p1__43775_SHARP_,p2__43776_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__43775_SHARP_,p2__43776_SHARP_){return goog.dom.insertChildAt(p1__43775_SHARP_,p2__43776_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43778_SHARP_,p2__43777_SHARP_){return goog.dom.insertSiblingBefore(p2__43777_SHARP_,p1__43778_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43778_SHARP_,p2__43777_SHARP_){return goog.dom.insertSiblingBefore(p2__43777_SHARP_,p1__43778_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43780_SHARP_,p2__43779_SHARP_){return goog.dom.insertSiblingAfter(p2__43779_SHARP_,p1__43780_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43780_SHARP_,p2__43779_SHARP_){return goog.dom.insertSiblingAfter(p2__43779_SHARP_,p1__43780_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__43782_SHARP_,p2__43781_SHARP_){return goog.dom.replaceNode(p2__43781_SHARP_,p1__43782_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__43782_SHARP_,p2__43781_SHARP_){return goog.dom.replaceNode(p2__43781_SHARP_,p1__43782_SHARP_);
}),old_content,new_content));
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));if(cljs.core.truth_(clojure.string.blank_QMARK_(s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__43787_43791 = cljs.core.seq(domina.nodes(content));var chunk__43788_43792 = null;var count__43789_43793 = (0);var i__43790_43794 = (0);while(true){
if((i__43790_43794 < count__43789_43793))
{var n_43795 = chunk__43788_43792.cljs$core$IIndexed$_nth$arity$2(null,i__43790_43794);goog.style.setStyle(n_43795,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43796 = seq__43787_43791;
var G__43797 = chunk__43788_43792;
var G__43798 = count__43789_43793;
var G__43799 = (i__43790_43794 + (1));
seq__43787_43791 = G__43796;
chunk__43788_43792 = G__43797;
count__43789_43793 = G__43798;
i__43790_43794 = G__43799;
continue;
}
} else
{var temp__4126__auto___43800 = cljs.core.seq(seq__43787_43791);if(temp__4126__auto___43800)
{var seq__43787_43801__$1 = temp__4126__auto___43800;if(cljs.core.chunked_seq_QMARK_(seq__43787_43801__$1))
{var c__4297__auto___43802 = cljs.core.chunk_first(seq__43787_43801__$1);{
var G__43803 = cljs.core.chunk_rest(seq__43787_43801__$1);
var G__43804 = c__4297__auto___43802;
var G__43805 = cljs.core.count(c__4297__auto___43802);
var G__43806 = (0);
seq__43787_43791 = G__43803;
chunk__43788_43792 = G__43804;
count__43789_43793 = G__43805;
i__43790_43794 = G__43806;
continue;
}
} else
{var n_43807 = cljs.core.first(seq__43787_43801__$1);goog.style.setStyle(n_43807,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43808 = cljs.core.next(seq__43787_43801__$1);
var G__43809 = null;
var G__43810 = (0);
var G__43811 = (0);
seq__43787_43791 = G__43808;
chunk__43788_43792 = G__43809;
count__43789_43793 = G__43810;
i__43790_43794 = G__43811;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__43812){
var content = cljs.core.first(arglist__43812);
arglist__43812 = cljs.core.next(arglist__43812);
var name = cljs.core.first(arglist__43812);
var value = cljs.core.rest(arglist__43812);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__43817_43821 = cljs.core.seq(domina.nodes(content));var chunk__43818_43822 = null;var count__43819_43823 = (0);var i__43820_43824 = (0);while(true){
if((i__43820_43824 < count__43819_43823))
{var n_43825 = chunk__43818_43822.cljs$core$IIndexed$_nth$arity$2(null,i__43820_43824);n_43825.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43826 = seq__43817_43821;
var G__43827 = chunk__43818_43822;
var G__43828 = count__43819_43823;
var G__43829 = (i__43820_43824 + (1));
seq__43817_43821 = G__43826;
chunk__43818_43822 = G__43827;
count__43819_43823 = G__43828;
i__43820_43824 = G__43829;
continue;
}
} else
{var temp__4126__auto___43830 = cljs.core.seq(seq__43817_43821);if(temp__4126__auto___43830)
{var seq__43817_43831__$1 = temp__4126__auto___43830;if(cljs.core.chunked_seq_QMARK_(seq__43817_43831__$1))
{var c__4297__auto___43832 = cljs.core.chunk_first(seq__43817_43831__$1);{
var G__43833 = cljs.core.chunk_rest(seq__43817_43831__$1);
var G__43834 = c__4297__auto___43832;
var G__43835 = cljs.core.count(c__4297__auto___43832);
var G__43836 = (0);
seq__43817_43821 = G__43833;
chunk__43818_43822 = G__43834;
count__43819_43823 = G__43835;
i__43820_43824 = G__43836;
continue;
}
} else
{var n_43837 = cljs.core.first(seq__43817_43831__$1);n_43837.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__43838 = cljs.core.next(seq__43817_43831__$1);
var G__43839 = null;
var G__43840 = (0);
var G__43841 = (0);
seq__43817_43821 = G__43838;
chunk__43818_43822 = G__43839;
count__43819_43823 = G__43840;
i__43820_43824 = G__43841;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__43842){
var content = cljs.core.first(arglist__43842);
arglist__43842 = cljs.core.next(arglist__43842);
var name = cljs.core.first(arglist__43842);
var value = cljs.core.rest(arglist__43842);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__43847_43851 = cljs.core.seq(domina.nodes(content));var chunk__43848_43852 = null;var count__43849_43853 = (0);var i__43850_43854 = (0);while(true){
if((i__43850_43854 < count__43849_43853))
{var n_43855 = chunk__43848_43852.cljs$core$IIndexed$_nth$arity$2(null,i__43850_43854);n_43855.removeAttribute(cljs.core.name(name));
{
var G__43856 = seq__43847_43851;
var G__43857 = chunk__43848_43852;
var G__43858 = count__43849_43853;
var G__43859 = (i__43850_43854 + (1));
seq__43847_43851 = G__43856;
chunk__43848_43852 = G__43857;
count__43849_43853 = G__43858;
i__43850_43854 = G__43859;
continue;
}
} else
{var temp__4126__auto___43860 = cljs.core.seq(seq__43847_43851);if(temp__4126__auto___43860)
{var seq__43847_43861__$1 = temp__4126__auto___43860;if(cljs.core.chunked_seq_QMARK_(seq__43847_43861__$1))
{var c__4297__auto___43862 = cljs.core.chunk_first(seq__43847_43861__$1);{
var G__43863 = cljs.core.chunk_rest(seq__43847_43861__$1);
var G__43864 = c__4297__auto___43862;
var G__43865 = cljs.core.count(c__4297__auto___43862);
var G__43866 = (0);
seq__43847_43851 = G__43863;
chunk__43848_43852 = G__43864;
count__43849_43853 = G__43865;
i__43850_43854 = G__43866;
continue;
}
} else
{var n_43867 = cljs.core.first(seq__43847_43861__$1);n_43867.removeAttribute(cljs.core.name(name));
{
var G__43868 = cljs.core.next(seq__43847_43861__$1);
var G__43869 = null;
var G__43870 = (0);
var G__43871 = (0);
seq__43847_43851 = G__43868;
chunk__43848_43852 = G__43869;
count__43849_43853 = G__43870;
i__43850_43854 = G__43871;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__43873 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43873,(0),null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43873,(1),null);if(cljs.core.truth_((function (){var and__3529__auto__ = k;if(cljs.core.truth_(and__3529__auto__))
{return v;
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr(content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes(style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes(style.cssText);
} else
{if(cljs.core.constant$keyword$778)
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,attrs__$1){
return (function (p1__43874_SHARP_){var attr = attrs__$1.item(p1__43874_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__43881_43887 = cljs.core.seq(styles);var chunk__43882_43888 = null;var count__43883_43889 = (0);var i__43884_43890 = (0);while(true){
if((i__43884_43890 < count__43883_43889))
{var vec__43885_43891 = chunk__43882_43888.cljs$core$IIndexed$_nth$arity$2(null,i__43884_43890);var name_43892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43885_43891,(0),null);var value_43893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43885_43891,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43892,cljs.core.array_seq([value_43893], 0));
{
var G__43894 = seq__43881_43887;
var G__43895 = chunk__43882_43888;
var G__43896 = count__43883_43889;
var G__43897 = (i__43884_43890 + (1));
seq__43881_43887 = G__43894;
chunk__43882_43888 = G__43895;
count__43883_43889 = G__43896;
i__43884_43890 = G__43897;
continue;
}
} else
{var temp__4126__auto___43898 = cljs.core.seq(seq__43881_43887);if(temp__4126__auto___43898)
{var seq__43881_43899__$1 = temp__4126__auto___43898;if(cljs.core.chunked_seq_QMARK_(seq__43881_43899__$1))
{var c__4297__auto___43900 = cljs.core.chunk_first(seq__43881_43899__$1);{
var G__43901 = cljs.core.chunk_rest(seq__43881_43899__$1);
var G__43902 = c__4297__auto___43900;
var G__43903 = cljs.core.count(c__4297__auto___43900);
var G__43904 = (0);
seq__43881_43887 = G__43901;
chunk__43882_43888 = G__43902;
count__43883_43889 = G__43903;
i__43884_43890 = G__43904;
continue;
}
} else
{var vec__43886_43905 = cljs.core.first(seq__43881_43899__$1);var name_43906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43886_43905,(0),null);var value_43907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43886_43905,(1),null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43906,cljs.core.array_seq([value_43907], 0));
{
var G__43908 = cljs.core.next(seq__43881_43899__$1);
var G__43909 = null;
var G__43910 = (0);
var G__43911 = (0);
seq__43881_43887 = G__43908;
chunk__43882_43888 = G__43909;
count__43883_43889 = G__43910;
i__43884_43890 = G__43911;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__43918_43924 = cljs.core.seq(attrs);var chunk__43919_43925 = null;var count__43920_43926 = (0);var i__43921_43927 = (0);while(true){
if((i__43921_43927 < count__43920_43926))
{var vec__43922_43928 = chunk__43919_43925.cljs$core$IIndexed$_nth$arity$2(null,i__43921_43927);var name_43929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43922_43928,(0),null);var value_43930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43922_43928,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43929,cljs.core.array_seq([value_43930], 0));
{
var G__43931 = seq__43918_43924;
var G__43932 = chunk__43919_43925;
var G__43933 = count__43920_43926;
var G__43934 = (i__43921_43927 + (1));
seq__43918_43924 = G__43931;
chunk__43919_43925 = G__43932;
count__43920_43926 = G__43933;
i__43921_43927 = G__43934;
continue;
}
} else
{var temp__4126__auto___43935 = cljs.core.seq(seq__43918_43924);if(temp__4126__auto___43935)
{var seq__43918_43936__$1 = temp__4126__auto___43935;if(cljs.core.chunked_seq_QMARK_(seq__43918_43936__$1))
{var c__4297__auto___43937 = cljs.core.chunk_first(seq__43918_43936__$1);{
var G__43938 = cljs.core.chunk_rest(seq__43918_43936__$1);
var G__43939 = c__4297__auto___43937;
var G__43940 = cljs.core.count(c__4297__auto___43937);
var G__43941 = (0);
seq__43918_43924 = G__43938;
chunk__43919_43925 = G__43939;
count__43920_43926 = G__43940;
i__43921_43927 = G__43941;
continue;
}
} else
{var vec__43923_43942 = cljs.core.first(seq__43918_43936__$1);var name_43943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43923_43942,(0),null);var value_43944 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43923_43942,(1),null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_43943,cljs.core.array_seq([value_43944], 0));
{
var G__43945 = cljs.core.next(seq__43918_43936__$1);
var G__43946 = null;
var G__43947 = (0);
var G__43948 = (0);
seq__43918_43924 = G__43945;
chunk__43919_43925 = G__43946;
count__43920_43926 = G__43947;
i__43921_43927 = G__43948;
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
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__43953_43957 = cljs.core.seq(domina.nodes(content));var chunk__43954_43958 = null;var count__43955_43959 = (0);var i__43956_43960 = (0);while(true){
if((i__43956_43960 < count__43955_43959))
{var node_43961 = chunk__43954_43958.cljs$core$IIndexed$_nth$arity$2(null,i__43956_43960);goog.dom.classes.add(node_43961,class$);
{
var G__43962 = seq__43953_43957;
var G__43963 = chunk__43954_43958;
var G__43964 = count__43955_43959;
var G__43965 = (i__43956_43960 + (1));
seq__43953_43957 = G__43962;
chunk__43954_43958 = G__43963;
count__43955_43959 = G__43964;
i__43956_43960 = G__43965;
continue;
}
} else
{var temp__4126__auto___43966 = cljs.core.seq(seq__43953_43957);if(temp__4126__auto___43966)
{var seq__43953_43967__$1 = temp__4126__auto___43966;if(cljs.core.chunked_seq_QMARK_(seq__43953_43967__$1))
{var c__4297__auto___43968 = cljs.core.chunk_first(seq__43953_43967__$1);{
var G__43969 = cljs.core.chunk_rest(seq__43953_43967__$1);
var G__43970 = c__4297__auto___43968;
var G__43971 = cljs.core.count(c__4297__auto___43968);
var G__43972 = (0);
seq__43953_43957 = G__43969;
chunk__43954_43958 = G__43970;
count__43955_43959 = G__43971;
i__43956_43960 = G__43972;
continue;
}
} else
{var node_43973 = cljs.core.first(seq__43953_43967__$1);goog.dom.classes.add(node_43973,class$);
{
var G__43974 = cljs.core.next(seq__43953_43967__$1);
var G__43975 = null;
var G__43976 = (0);
var G__43977 = (0);
seq__43953_43957 = G__43974;
chunk__43954_43958 = G__43975;
count__43955_43959 = G__43976;
i__43956_43960 = G__43977;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__43982_43986 = cljs.core.seq(domina.nodes(content));var chunk__43983_43987 = null;var count__43984_43988 = (0);var i__43985_43989 = (0);while(true){
if((i__43985_43989 < count__43984_43988))
{var node_43990 = chunk__43983_43987.cljs$core$IIndexed$_nth$arity$2(null,i__43985_43989);goog.dom.classes.remove(node_43990,class$);
{
var G__43991 = seq__43982_43986;
var G__43992 = chunk__43983_43987;
var G__43993 = count__43984_43988;
var G__43994 = (i__43985_43989 + (1));
seq__43982_43986 = G__43991;
chunk__43983_43987 = G__43992;
count__43984_43988 = G__43993;
i__43985_43989 = G__43994;
continue;
}
} else
{var temp__4126__auto___43995 = cljs.core.seq(seq__43982_43986);if(temp__4126__auto___43995)
{var seq__43982_43996__$1 = temp__4126__auto___43995;if(cljs.core.chunked_seq_QMARK_(seq__43982_43996__$1))
{var c__4297__auto___43997 = cljs.core.chunk_first(seq__43982_43996__$1);{
var G__43998 = cljs.core.chunk_rest(seq__43982_43996__$1);
var G__43999 = c__4297__auto___43997;
var G__44000 = cljs.core.count(c__4297__auto___43997);
var G__44001 = (0);
seq__43982_43986 = G__43998;
chunk__43983_43987 = G__43999;
count__43984_43988 = G__44000;
i__43985_43989 = G__44001;
continue;
}
} else
{var node_44002 = cljs.core.first(seq__43982_43996__$1);goog.dom.classes.remove(node_44002,class$);
{
var G__44003 = cljs.core.next(seq__43982_43996__$1);
var G__44004 = null;
var G__44005 = (0);
var G__44006 = (0);
seq__43982_43986 = G__44003;
chunk__43983_43987 = G__44004;
count__43984_43988 = G__44005;
i__43985_43989 = G__44006;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__44011_44015 = cljs.core.seq(domina.nodes(content));var chunk__44012_44016 = null;var count__44013_44017 = (0);var i__44014_44018 = (0);while(true){
if((i__44014_44018 < count__44013_44017))
{var node_44019 = chunk__44012_44016.cljs$core$IIndexed$_nth$arity$2(null,i__44014_44018);goog.dom.classes.toggle(node_44019,class$);
{
var G__44020 = seq__44011_44015;
var G__44021 = chunk__44012_44016;
var G__44022 = count__44013_44017;
var G__44023 = (i__44014_44018 + (1));
seq__44011_44015 = G__44020;
chunk__44012_44016 = G__44021;
count__44013_44017 = G__44022;
i__44014_44018 = G__44023;
continue;
}
} else
{var temp__4126__auto___44024 = cljs.core.seq(seq__44011_44015);if(temp__4126__auto___44024)
{var seq__44011_44025__$1 = temp__4126__auto___44024;if(cljs.core.chunked_seq_QMARK_(seq__44011_44025__$1))
{var c__4297__auto___44026 = cljs.core.chunk_first(seq__44011_44025__$1);{
var G__44027 = cljs.core.chunk_rest(seq__44011_44025__$1);
var G__44028 = c__4297__auto___44026;
var G__44029 = cljs.core.count(c__4297__auto___44026);
var G__44030 = (0);
seq__44011_44015 = G__44027;
chunk__44012_44016 = G__44028;
count__44013_44017 = G__44029;
i__44014_44018 = G__44030;
continue;
}
} else
{var node_44031 = cljs.core.first(seq__44011_44025__$1);goog.dom.classes.toggle(node_44031,class$);
{
var G__44032 = cljs.core.next(seq__44011_44025__$1);
var G__44033 = null;
var G__44034 = (0);
var G__44035 = (0);
seq__44011_44015 = G__44032;
chunk__44012_44016 = G__44033;
count__44013_44017 = G__44034;
i__44014_44018 = G__44035;
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
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_44044__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__44040_44045 = cljs.core.seq(domina.nodes(content));var chunk__44041_44046 = null;var count__44042_44047 = (0);var i__44043_44048 = (0);while(true){
if((i__44043_44048 < count__44042_44047))
{var node_44049 = chunk__44041_44046.cljs$core$IIndexed$_nth$arity$2(null,i__44043_44048);goog.dom.classes.set(node_44049,classes_44044__$1);
{
var G__44050 = seq__44040_44045;
var G__44051 = chunk__44041_44046;
var G__44052 = count__44042_44047;
var G__44053 = (i__44043_44048 + (1));
seq__44040_44045 = G__44050;
chunk__44041_44046 = G__44051;
count__44042_44047 = G__44052;
i__44043_44048 = G__44053;
continue;
}
} else
{var temp__4126__auto___44054 = cljs.core.seq(seq__44040_44045);if(temp__4126__auto___44054)
{var seq__44040_44055__$1 = temp__4126__auto___44054;if(cljs.core.chunked_seq_QMARK_(seq__44040_44055__$1))
{var c__4297__auto___44056 = cljs.core.chunk_first(seq__44040_44055__$1);{
var G__44057 = cljs.core.chunk_rest(seq__44040_44055__$1);
var G__44058 = c__4297__auto___44056;
var G__44059 = cljs.core.count(c__4297__auto___44056);
var G__44060 = (0);
seq__44040_44045 = G__44057;
chunk__44041_44046 = G__44058;
count__44042_44047 = G__44059;
i__44043_44048 = G__44060;
continue;
}
} else
{var node_44061 = cljs.core.first(seq__44040_44055__$1);goog.dom.classes.set(node_44061,classes_44044__$1);
{
var G__44062 = cljs.core.next(seq__44040_44055__$1);
var G__44063 = null;
var G__44064 = (0);
var G__44065 = (0);
seq__44040_44045 = G__44062;
chunk__44041_44046 = G__44063;
count__44042_44047 = G__44064;
i__44043_44048 = G__44065;
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
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__44070_44074 = cljs.core.seq(domina.nodes(content));var chunk__44071_44075 = null;var count__44072_44076 = (0);var i__44073_44077 = (0);while(true){
if((i__44073_44077 < count__44072_44076))
{var node_44078 = chunk__44071_44075.cljs$core$IIndexed$_nth$arity$2(null,i__44073_44077);goog.dom.setTextContent(node_44078,value);
{
var G__44079 = seq__44070_44074;
var G__44080 = chunk__44071_44075;
var G__44081 = count__44072_44076;
var G__44082 = (i__44073_44077 + (1));
seq__44070_44074 = G__44079;
chunk__44071_44075 = G__44080;
count__44072_44076 = G__44081;
i__44073_44077 = G__44082;
continue;
}
} else
{var temp__4126__auto___44083 = cljs.core.seq(seq__44070_44074);if(temp__4126__auto___44083)
{var seq__44070_44084__$1 = temp__4126__auto___44083;if(cljs.core.chunked_seq_QMARK_(seq__44070_44084__$1))
{var c__4297__auto___44085 = cljs.core.chunk_first(seq__44070_44084__$1);{
var G__44086 = cljs.core.chunk_rest(seq__44070_44084__$1);
var G__44087 = c__4297__auto___44085;
var G__44088 = cljs.core.count(c__4297__auto___44085);
var G__44089 = (0);
seq__44070_44074 = G__44086;
chunk__44071_44075 = G__44087;
count__44072_44076 = G__44088;
i__44073_44077 = G__44089;
continue;
}
} else
{var node_44090 = cljs.core.first(seq__44070_44084__$1);goog.dom.setTextContent(node_44090,value);
{
var G__44091 = cljs.core.next(seq__44070_44084__$1);
var G__44092 = null;
var G__44093 = (0);
var G__44094 = (0);
seq__44070_44074 = G__44091;
chunk__44071_44075 = G__44092;
count__44072_44076 = G__44093;
i__44073_44077 = G__44094;
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
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node(content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__44099_44103 = cljs.core.seq(domina.nodes(content));var chunk__44100_44104 = null;var count__44101_44105 = (0);var i__44102_44106 = (0);while(true){
if((i__44102_44106 < count__44101_44105))
{var node_44107 = chunk__44100_44104.cljs$core$IIndexed$_nth$arity$2(null,i__44102_44106);goog.dom.forms.setValue(node_44107,value);
{
var G__44108 = seq__44099_44103;
var G__44109 = chunk__44100_44104;
var G__44110 = count__44101_44105;
var G__44111 = (i__44102_44106 + (1));
seq__44099_44103 = G__44108;
chunk__44100_44104 = G__44109;
count__44101_44105 = G__44110;
i__44102_44106 = G__44111;
continue;
}
} else
{var temp__4126__auto___44112 = cljs.core.seq(seq__44099_44103);if(temp__4126__auto___44112)
{var seq__44099_44113__$1 = temp__4126__auto___44112;if(cljs.core.chunked_seq_QMARK_(seq__44099_44113__$1))
{var c__4297__auto___44114 = cljs.core.chunk_first(seq__44099_44113__$1);{
var G__44115 = cljs.core.chunk_rest(seq__44099_44113__$1);
var G__44116 = c__4297__auto___44114;
var G__44117 = cljs.core.count(c__4297__auto___44114);
var G__44118 = (0);
seq__44099_44103 = G__44115;
chunk__44100_44104 = G__44116;
count__44101_44105 = G__44117;
i__44102_44106 = G__44118;
continue;
}
} else
{var node_44119 = cljs.core.first(seq__44099_44113__$1);goog.dom.forms.setValue(node_44119,value);
{
var G__44120 = cljs.core.next(seq__44099_44113__$1);
var G__44121 = null;
var G__44122 = (0);
var G__44123 = (0);
seq__44099_44103 = G__44120;
chunk__44100_44104 = G__44121;
count__44101_44105 = G__44122;
i__44102_44106 = G__44123;
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
domina.html = (function html(content){return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3529__auto__ = allows_inner_html_QMARK_;if(and__3529__auto__)
{var and__3529__auto____$1 = (function (){var or__3541__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3529__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var value_44134 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__44130_44135 = cljs.core.seq(domina.nodes(content));var chunk__44131_44136 = null;var count__44132_44137 = (0);var i__44133_44138 = (0);while(true){
if((i__44133_44138 < count__44132_44137))
{var node_44139 = chunk__44131_44136.cljs$core$IIndexed$_nth$arity$2(null,i__44133_44138);node_44139.innerHTML = value_44134;
{
var G__44140 = seq__44130_44135;
var G__44141 = chunk__44131_44136;
var G__44142 = count__44132_44137;
var G__44143 = (i__44133_44138 + (1));
seq__44130_44135 = G__44140;
chunk__44131_44136 = G__44141;
count__44132_44137 = G__44142;
i__44133_44138 = G__44143;
continue;
}
} else
{var temp__4126__auto___44144 = cljs.core.seq(seq__44130_44135);if(temp__4126__auto___44144)
{var seq__44130_44145__$1 = temp__4126__auto___44144;if(cljs.core.chunked_seq_QMARK_(seq__44130_44145__$1))
{var c__4297__auto___44146 = cljs.core.chunk_first(seq__44130_44145__$1);{
var G__44147 = cljs.core.chunk_rest(seq__44130_44145__$1);
var G__44148 = c__4297__auto___44146;
var G__44149 = cljs.core.count(c__4297__auto___44146);
var G__44150 = (0);
seq__44130_44135 = G__44147;
chunk__44131_44136 = G__44148;
count__44132_44137 = G__44149;
i__44133_44138 = G__44150;
continue;
}
} else
{var node_44151 = cljs.core.first(seq__44130_44145__$1);node_44151.innerHTML = value_44134;
{
var G__44152 = cljs.core.next(seq__44130_44145__$1);
var G__44153 = null;
var G__44154 = (0);
var G__44155 = (0);
seq__44130_44135 = G__44152;
chunk__44131_44136 = G__44153;
count__44132_44137 = G__44154;
i__44133_44138 = G__44155;
continue;
}
}
} else
{}
}
break;
}
}catch (e44129){if((e44129 instanceof Error))
{var e_44156 = e44129;domina.replace_children_BANG_(content,value_44134);
} else
{if(cljs.core.constant$keyword$778)
{throw e44129;
} else
{}
}
}} else
{domina.replace_children_BANG_(content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_(content,inner_content);
} else
{return domina.replace_children_BANG_(content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3529__auto__ = bubble;if(cljs.core.truth_(and__3529__auto__))
{return (value == null);
} else
{return and__3529__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3541__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__44163_44167 = cljs.core.seq(children);var chunk__44164_44168 = null;var count__44165_44169 = (0);var i__44166_44170 = (0);while(true){
if((i__44166_44170 < count__44165_44169))
{var child_44171 = chunk__44164_44168.cljs$core$IIndexed$_nth$arity$2(null,i__44166_44170);frag.appendChild(child_44171);
{
var G__44172 = seq__44163_44167;
var G__44173 = chunk__44164_44168;
var G__44174 = count__44165_44169;
var G__44175 = (i__44166_44170 + (1));
seq__44163_44167 = G__44172;
chunk__44164_44168 = G__44173;
count__44165_44169 = G__44174;
i__44166_44170 = G__44175;
continue;
}
} else
{var temp__4126__auto___44176 = cljs.core.seq(seq__44163_44167);if(temp__4126__auto___44176)
{var seq__44163_44177__$1 = temp__4126__auto___44176;if(cljs.core.chunked_seq_QMARK_(seq__44163_44177__$1))
{var c__4297__auto___44178 = cljs.core.chunk_first(seq__44163_44177__$1);{
var G__44179 = cljs.core.chunk_rest(seq__44163_44177__$1);
var G__44180 = c__4297__auto___44178;
var G__44181 = cljs.core.count(c__4297__auto___44178);
var G__44182 = (0);
seq__44163_44167 = G__44179;
chunk__44164_44168 = G__44180;
count__44165_44169 = G__44181;
i__44166_44170 = G__44182;
continue;
}
} else
{var child_44183 = cljs.core.first(seq__44163_44177__$1);frag.appendChild(child_44183);
{
var G__44184 = cljs.core.next(seq__44163_44177__$1);
var G__44185 = null;
var G__44186 = (0);
var G__44187 = (0);
seq__44163_44167 = G__44184;
chunk__44164_44168 = G__44185;
count__44165_44169 = G__44186;
i__44166_44170 = G__44187;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (parents,children,first_child,other_children){
return (function (p1__44157_SHARP_,p2__44158_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__44157_SHARP_,p2__44158_SHARP_) : f.call(null,p1__44157_SHARP_,p2__44158_SHARP_));
});})(parents,children,first_child,other_children))
,cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
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
{return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else
{return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3529__auto__ = obj;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not(obj.nodeName);if(and__3529__auto____$1)
{return obj.length;
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
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
{if((function (){var G__44189 = list_thing;if(G__44189)
{var bit__4191__auto__ = (G__44189.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__44189.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44189.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44189);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44189);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$779)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__44190 = content;if(G__44190)
{var bit__4191__auto__ = (G__44190.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__44190.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44190.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44190);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44190);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$779)
{return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__44191 = content;if(G__44191)
{var bit__4191__auto__ = (G__44191.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4191__auto__) || (G__44191.cljs$core$ISeqable$))
{return true;
} else
{if((!G__44191.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44191);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__44191);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item((0));
} else
{if(cljs.core.constant$keyword$779)
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node(domina.string_to_dom(s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist(nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist(coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
