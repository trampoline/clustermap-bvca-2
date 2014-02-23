// Compiled by ClojureScript 0.0-2138
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_27739 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27740 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27741 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$238,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27740,table_section_wrapper_27740,opt_wrapper_27739,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27741,table_section_wrapper_27740,cell_wrapper_27741,opt_wrapper_27739,table_section_wrapper_27740,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27740]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27746 = cljs.core.seq(tbody);var chunk__27747 = null;var count__27748 = 0;var i__27749 = 0;while(true){
if((i__27749 < count__27748))
{var child = chunk__27747.cljs$core$IIndexed$_nth$arity$2(null,i__27749);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27750 = seq__27746;
var G__27751 = chunk__27747;
var G__27752 = count__27748;
var G__27753 = (i__27749 + 1);
seq__27746 = G__27750;
chunk__27747 = G__27751;
count__27748 = G__27752;
i__27749 = G__27753;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27746);if(temp__4092__auto__)
{var seq__27746__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27746__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27746__$1);{
var G__27754 = cljs.core.chunk_rest(seq__27746__$1);
var G__27755 = c__4148__auto__;
var G__27756 = cljs.core.count(c__4148__auto__);
var G__27757 = 0;
seq__27746 = G__27754;
chunk__27747 = G__27755;
count__27748 = G__27756;
i__27749 = G__27757;
continue;
}
} else
{var child = cljs.core.first(seq__27746__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27758 = cljs.core.next(seq__27746__$1);
var G__27759 = null;
var G__27760 = 0;
var G__27761 = 0;
seq__27746 = G__27758;
chunk__27747 = G__27759;
count__27748 = G__27760;
i__27749 = G__27761;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27763 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27763,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27763,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27763,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27764 = wrapper.lastChild;
var G__27765 = (level - 1);
wrapper = G__27764;
level = G__27765;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not(domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj27767 = {};return obj27767;
})();
domina.nodes = (function nodes(content){if((function (){var and__3394__auto__ = content;if(and__3394__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3394__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4027__auto__ = (((content == null))?null:content);return (function (){var or__3406__auto__ = (domina.nodes[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.nodes["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3394__auto__ = nodeseq;if(and__3394__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3394__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4027__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3406__auto__ = (domina.single_node[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (domina.single_node["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__27768){
var mesg = cljs.core.seq(arglist__27768);
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
log.cljs$lang$applyTo = (function (arglist__27769){
var mesg = cljs.core.seq(arglist__27769);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27770){
var contents = cljs.core.seq(arglist__27770);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27771_SHARP_){return p1__27771_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27772_SHARP_,p2__27773_SHARP_){return goog.dom.insertChildAt(p1__27772_SHARP_,p2__27773_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27772_SHARP_,p2__27773_SHARP_){return goog.dom.insertChildAt(p1__27772_SHARP_,p2__27773_SHARP_,idx);
}),parent_content,child_content));
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_(parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27775_SHARP_,p2__27774_SHARP_){return goog.dom.insertSiblingBefore(p2__27774_SHARP_,p1__27775_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27775_SHARP_,p2__27774_SHARP_){return goog.dom.insertSiblingBefore(p2__27774_SHARP_,p1__27775_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27777_SHARP_,p2__27776_SHARP_){return goog.dom.insertSiblingAfter(p2__27776_SHARP_,p1__27777_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27777_SHARP_,p2__27776_SHARP_){return goog.dom.insertSiblingAfter(p2__27776_SHARP_,p1__27777_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27779_SHARP_,p2__27778_SHARP_){return goog.dom.replaceNode(p2__27778_SHARP_,p1__27779_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27779_SHARP_,p2__27778_SHARP_){return goog.dom.replaceNode(p2__27778_SHARP_,p1__27779_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27784_27788 = cljs.core.seq(domina.nodes(content));var chunk__27785_27789 = null;var count__27786_27790 = 0;var i__27787_27791 = 0;while(true){
if((i__27787_27791 < count__27786_27790))
{var n_27792 = chunk__27785_27789.cljs$core$IIndexed$_nth$arity$2(null,i__27787_27791);goog.style.setStyle(n_27792,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27793 = seq__27784_27788;
var G__27794 = chunk__27785_27789;
var G__27795 = count__27786_27790;
var G__27796 = (i__27787_27791 + 1);
seq__27784_27788 = G__27793;
chunk__27785_27789 = G__27794;
count__27786_27790 = G__27795;
i__27787_27791 = G__27796;
continue;
}
} else
{var temp__4092__auto___27797 = cljs.core.seq(seq__27784_27788);if(temp__4092__auto___27797)
{var seq__27784_27798__$1 = temp__4092__auto___27797;if(cljs.core.chunked_seq_QMARK_(seq__27784_27798__$1))
{var c__4148__auto___27799 = cljs.core.chunk_first(seq__27784_27798__$1);{
var G__27800 = cljs.core.chunk_rest(seq__27784_27798__$1);
var G__27801 = c__4148__auto___27799;
var G__27802 = cljs.core.count(c__4148__auto___27799);
var G__27803 = 0;
seq__27784_27788 = G__27800;
chunk__27785_27789 = G__27801;
count__27786_27790 = G__27802;
i__27787_27791 = G__27803;
continue;
}
} else
{var n_27804 = cljs.core.first(seq__27784_27798__$1);goog.style.setStyle(n_27804,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27805 = cljs.core.next(seq__27784_27798__$1);
var G__27806 = null;
var G__27807 = 0;
var G__27808 = 0;
seq__27784_27788 = G__27805;
chunk__27785_27789 = G__27806;
count__27786_27790 = G__27807;
i__27787_27791 = G__27808;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27809){
var content = cljs.core.first(arglist__27809);
arglist__27809 = cljs.core.next(arglist__27809);
var name = cljs.core.first(arglist__27809);
var value = cljs.core.rest(arglist__27809);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27814_27818 = cljs.core.seq(domina.nodes(content));var chunk__27815_27819 = null;var count__27816_27820 = 0;var i__27817_27821 = 0;while(true){
if((i__27817_27821 < count__27816_27820))
{var n_27822 = chunk__27815_27819.cljs$core$IIndexed$_nth$arity$2(null,i__27817_27821);n_27822.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27823 = seq__27814_27818;
var G__27824 = chunk__27815_27819;
var G__27825 = count__27816_27820;
var G__27826 = (i__27817_27821 + 1);
seq__27814_27818 = G__27823;
chunk__27815_27819 = G__27824;
count__27816_27820 = G__27825;
i__27817_27821 = G__27826;
continue;
}
} else
{var temp__4092__auto___27827 = cljs.core.seq(seq__27814_27818);if(temp__4092__auto___27827)
{var seq__27814_27828__$1 = temp__4092__auto___27827;if(cljs.core.chunked_seq_QMARK_(seq__27814_27828__$1))
{var c__4148__auto___27829 = cljs.core.chunk_first(seq__27814_27828__$1);{
var G__27830 = cljs.core.chunk_rest(seq__27814_27828__$1);
var G__27831 = c__4148__auto___27829;
var G__27832 = cljs.core.count(c__4148__auto___27829);
var G__27833 = 0;
seq__27814_27818 = G__27830;
chunk__27815_27819 = G__27831;
count__27816_27820 = G__27832;
i__27817_27821 = G__27833;
continue;
}
} else
{var n_27834 = cljs.core.first(seq__27814_27828__$1);n_27834.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27835 = cljs.core.next(seq__27814_27828__$1);
var G__27836 = null;
var G__27837 = 0;
var G__27838 = 0;
seq__27814_27818 = G__27835;
chunk__27815_27819 = G__27836;
count__27816_27820 = G__27837;
i__27817_27821 = G__27838;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27839){
var content = cljs.core.first(arglist__27839);
arglist__27839 = cljs.core.next(arglist__27839);
var name = cljs.core.first(arglist__27839);
var value = cljs.core.rest(arglist__27839);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27844_27848 = cljs.core.seq(domina.nodes(content));var chunk__27845_27849 = null;var count__27846_27850 = 0;var i__27847_27851 = 0;while(true){
if((i__27847_27851 < count__27846_27850))
{var n_27852 = chunk__27845_27849.cljs$core$IIndexed$_nth$arity$2(null,i__27847_27851);n_27852.removeAttribute(cljs.core.name(name));
{
var G__27853 = seq__27844_27848;
var G__27854 = chunk__27845_27849;
var G__27855 = count__27846_27850;
var G__27856 = (i__27847_27851 + 1);
seq__27844_27848 = G__27853;
chunk__27845_27849 = G__27854;
count__27846_27850 = G__27855;
i__27847_27851 = G__27856;
continue;
}
} else
{var temp__4092__auto___27857 = cljs.core.seq(seq__27844_27848);if(temp__4092__auto___27857)
{var seq__27844_27858__$1 = temp__4092__auto___27857;if(cljs.core.chunked_seq_QMARK_(seq__27844_27858__$1))
{var c__4148__auto___27859 = cljs.core.chunk_first(seq__27844_27858__$1);{
var G__27860 = cljs.core.chunk_rest(seq__27844_27858__$1);
var G__27861 = c__4148__auto___27859;
var G__27862 = cljs.core.count(c__4148__auto___27859);
var G__27863 = 0;
seq__27844_27848 = G__27860;
chunk__27845_27849 = G__27861;
count__27846_27850 = G__27862;
i__27847_27851 = G__27863;
continue;
}
} else
{var n_27864 = cljs.core.first(seq__27844_27858__$1);n_27864.removeAttribute(cljs.core.name(name));
{
var G__27865 = cljs.core.next(seq__27844_27858__$1);
var G__27866 = null;
var G__27867 = 0;
var G__27868 = 0;
seq__27844_27848 = G__27865;
chunk__27845_27849 = G__27866;
count__27846_27850 = G__27867;
i__27847_27851 = G__27868;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27870 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27870,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(cljs.core.constant$keyword$237)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27871_SHARP_){var attr = attrs__$1.item(p1__27871_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27878_27884 = cljs.core.seq(styles);var chunk__27879_27885 = null;var count__27880_27886 = 0;var i__27881_27887 = 0;while(true){
if((i__27881_27887 < count__27880_27886))
{var vec__27882_27888 = chunk__27879_27885.cljs$core$IIndexed$_nth$arity$2(null,i__27881_27887);var name_27889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882_27888,0,null);var value_27890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27882_27888,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27889,cljs.core.array_seq([value_27890], 0));
{
var G__27891 = seq__27878_27884;
var G__27892 = chunk__27879_27885;
var G__27893 = count__27880_27886;
var G__27894 = (i__27881_27887 + 1);
seq__27878_27884 = G__27891;
chunk__27879_27885 = G__27892;
count__27880_27886 = G__27893;
i__27881_27887 = G__27894;
continue;
}
} else
{var temp__4092__auto___27895 = cljs.core.seq(seq__27878_27884);if(temp__4092__auto___27895)
{var seq__27878_27896__$1 = temp__4092__auto___27895;if(cljs.core.chunked_seq_QMARK_(seq__27878_27896__$1))
{var c__4148__auto___27897 = cljs.core.chunk_first(seq__27878_27896__$1);{
var G__27898 = cljs.core.chunk_rest(seq__27878_27896__$1);
var G__27899 = c__4148__auto___27897;
var G__27900 = cljs.core.count(c__4148__auto___27897);
var G__27901 = 0;
seq__27878_27884 = G__27898;
chunk__27879_27885 = G__27899;
count__27880_27886 = G__27900;
i__27881_27887 = G__27901;
continue;
}
} else
{var vec__27883_27902 = cljs.core.first(seq__27878_27896__$1);var name_27903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27883_27902,0,null);var value_27904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27883_27902,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27903,cljs.core.array_seq([value_27904], 0));
{
var G__27905 = cljs.core.next(seq__27878_27896__$1);
var G__27906 = null;
var G__27907 = 0;
var G__27908 = 0;
seq__27878_27884 = G__27905;
chunk__27879_27885 = G__27906;
count__27880_27886 = G__27907;
i__27881_27887 = G__27908;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27915_27921 = cljs.core.seq(attrs);var chunk__27916_27922 = null;var count__27917_27923 = 0;var i__27918_27924 = 0;while(true){
if((i__27918_27924 < count__27917_27923))
{var vec__27919_27925 = chunk__27916_27922.cljs$core$IIndexed$_nth$arity$2(null,i__27918_27924);var name_27926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919_27925,0,null);var value_27927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27919_27925,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27926,cljs.core.array_seq([value_27927], 0));
{
var G__27928 = seq__27915_27921;
var G__27929 = chunk__27916_27922;
var G__27930 = count__27917_27923;
var G__27931 = (i__27918_27924 + 1);
seq__27915_27921 = G__27928;
chunk__27916_27922 = G__27929;
count__27917_27923 = G__27930;
i__27918_27924 = G__27931;
continue;
}
} else
{var temp__4092__auto___27932 = cljs.core.seq(seq__27915_27921);if(temp__4092__auto___27932)
{var seq__27915_27933__$1 = temp__4092__auto___27932;if(cljs.core.chunked_seq_QMARK_(seq__27915_27933__$1))
{var c__4148__auto___27934 = cljs.core.chunk_first(seq__27915_27933__$1);{
var G__27935 = cljs.core.chunk_rest(seq__27915_27933__$1);
var G__27936 = c__4148__auto___27934;
var G__27937 = cljs.core.count(c__4148__auto___27934);
var G__27938 = 0;
seq__27915_27921 = G__27935;
chunk__27916_27922 = G__27936;
count__27917_27923 = G__27937;
i__27918_27924 = G__27938;
continue;
}
} else
{var vec__27920_27939 = cljs.core.first(seq__27915_27933__$1);var name_27940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920_27939,0,null);var value_27941 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27920_27939,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27940,cljs.core.array_seq([value_27941], 0));
{
var G__27942 = cljs.core.next(seq__27915_27933__$1);
var G__27943 = null;
var G__27944 = 0;
var G__27945 = 0;
seq__27915_27921 = G__27942;
chunk__27916_27922 = G__27943;
count__27917_27923 = G__27944;
i__27918_27924 = G__27945;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27950_27954 = cljs.core.seq(domina.nodes(content));var chunk__27951_27955 = null;var count__27952_27956 = 0;var i__27953_27957 = 0;while(true){
if((i__27953_27957 < count__27952_27956))
{var node_27958 = chunk__27951_27955.cljs$core$IIndexed$_nth$arity$2(null,i__27953_27957);goog.dom.classes.add(node_27958,class$);
{
var G__27959 = seq__27950_27954;
var G__27960 = chunk__27951_27955;
var G__27961 = count__27952_27956;
var G__27962 = (i__27953_27957 + 1);
seq__27950_27954 = G__27959;
chunk__27951_27955 = G__27960;
count__27952_27956 = G__27961;
i__27953_27957 = G__27962;
continue;
}
} else
{var temp__4092__auto___27963 = cljs.core.seq(seq__27950_27954);if(temp__4092__auto___27963)
{var seq__27950_27964__$1 = temp__4092__auto___27963;if(cljs.core.chunked_seq_QMARK_(seq__27950_27964__$1))
{var c__4148__auto___27965 = cljs.core.chunk_first(seq__27950_27964__$1);{
var G__27966 = cljs.core.chunk_rest(seq__27950_27964__$1);
var G__27967 = c__4148__auto___27965;
var G__27968 = cljs.core.count(c__4148__auto___27965);
var G__27969 = 0;
seq__27950_27954 = G__27966;
chunk__27951_27955 = G__27967;
count__27952_27956 = G__27968;
i__27953_27957 = G__27969;
continue;
}
} else
{var node_27970 = cljs.core.first(seq__27950_27964__$1);goog.dom.classes.add(node_27970,class$);
{
var G__27971 = cljs.core.next(seq__27950_27964__$1);
var G__27972 = null;
var G__27973 = 0;
var G__27974 = 0;
seq__27950_27954 = G__27971;
chunk__27951_27955 = G__27972;
count__27952_27956 = G__27973;
i__27953_27957 = G__27974;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27979_27983 = cljs.core.seq(domina.nodes(content));var chunk__27980_27984 = null;var count__27981_27985 = 0;var i__27982_27986 = 0;while(true){
if((i__27982_27986 < count__27981_27985))
{var node_27987 = chunk__27980_27984.cljs$core$IIndexed$_nth$arity$2(null,i__27982_27986);goog.dom.classes.remove(node_27987,class$);
{
var G__27988 = seq__27979_27983;
var G__27989 = chunk__27980_27984;
var G__27990 = count__27981_27985;
var G__27991 = (i__27982_27986 + 1);
seq__27979_27983 = G__27988;
chunk__27980_27984 = G__27989;
count__27981_27985 = G__27990;
i__27982_27986 = G__27991;
continue;
}
} else
{var temp__4092__auto___27992 = cljs.core.seq(seq__27979_27983);if(temp__4092__auto___27992)
{var seq__27979_27993__$1 = temp__4092__auto___27992;if(cljs.core.chunked_seq_QMARK_(seq__27979_27993__$1))
{var c__4148__auto___27994 = cljs.core.chunk_first(seq__27979_27993__$1);{
var G__27995 = cljs.core.chunk_rest(seq__27979_27993__$1);
var G__27996 = c__4148__auto___27994;
var G__27997 = cljs.core.count(c__4148__auto___27994);
var G__27998 = 0;
seq__27979_27983 = G__27995;
chunk__27980_27984 = G__27996;
count__27981_27985 = G__27997;
i__27982_27986 = G__27998;
continue;
}
} else
{var node_27999 = cljs.core.first(seq__27979_27993__$1);goog.dom.classes.remove(node_27999,class$);
{
var G__28000 = cljs.core.next(seq__27979_27993__$1);
var G__28001 = null;
var G__28002 = 0;
var G__28003 = 0;
seq__27979_27983 = G__28000;
chunk__27980_27984 = G__28001;
count__27981_27985 = G__28002;
i__27982_27986 = G__28003;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28008_28012 = cljs.core.seq(domina.nodes(content));var chunk__28009_28013 = null;var count__28010_28014 = 0;var i__28011_28015 = 0;while(true){
if((i__28011_28015 < count__28010_28014))
{var node_28016 = chunk__28009_28013.cljs$core$IIndexed$_nth$arity$2(null,i__28011_28015);goog.dom.classes.toggle(node_28016,class$);
{
var G__28017 = seq__28008_28012;
var G__28018 = chunk__28009_28013;
var G__28019 = count__28010_28014;
var G__28020 = (i__28011_28015 + 1);
seq__28008_28012 = G__28017;
chunk__28009_28013 = G__28018;
count__28010_28014 = G__28019;
i__28011_28015 = G__28020;
continue;
}
} else
{var temp__4092__auto___28021 = cljs.core.seq(seq__28008_28012);if(temp__4092__auto___28021)
{var seq__28008_28022__$1 = temp__4092__auto___28021;if(cljs.core.chunked_seq_QMARK_(seq__28008_28022__$1))
{var c__4148__auto___28023 = cljs.core.chunk_first(seq__28008_28022__$1);{
var G__28024 = cljs.core.chunk_rest(seq__28008_28022__$1);
var G__28025 = c__4148__auto___28023;
var G__28026 = cljs.core.count(c__4148__auto___28023);
var G__28027 = 0;
seq__28008_28012 = G__28024;
chunk__28009_28013 = G__28025;
count__28010_28014 = G__28026;
i__28011_28015 = G__28027;
continue;
}
} else
{var node_28028 = cljs.core.first(seq__28008_28022__$1);goog.dom.classes.toggle(node_28028,class$);
{
var G__28029 = cljs.core.next(seq__28008_28022__$1);
var G__28030 = null;
var G__28031 = 0;
var G__28032 = 0;
seq__28008_28012 = G__28029;
chunk__28009_28013 = G__28030;
count__28010_28014 = G__28031;
i__28011_28015 = G__28032;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28041__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__28037_28042 = cljs.core.seq(domina.nodes(content));var chunk__28038_28043 = null;var count__28039_28044 = 0;var i__28040_28045 = 0;while(true){
if((i__28040_28045 < count__28039_28044))
{var node_28046 = chunk__28038_28043.cljs$core$IIndexed$_nth$arity$2(null,i__28040_28045);goog.dom.classes.set(node_28046,classes_28041__$1);
{
var G__28047 = seq__28037_28042;
var G__28048 = chunk__28038_28043;
var G__28049 = count__28039_28044;
var G__28050 = (i__28040_28045 + 1);
seq__28037_28042 = G__28047;
chunk__28038_28043 = G__28048;
count__28039_28044 = G__28049;
i__28040_28045 = G__28050;
continue;
}
} else
{var temp__4092__auto___28051 = cljs.core.seq(seq__28037_28042);if(temp__4092__auto___28051)
{var seq__28037_28052__$1 = temp__4092__auto___28051;if(cljs.core.chunked_seq_QMARK_(seq__28037_28052__$1))
{var c__4148__auto___28053 = cljs.core.chunk_first(seq__28037_28052__$1);{
var G__28054 = cljs.core.chunk_rest(seq__28037_28052__$1);
var G__28055 = c__4148__auto___28053;
var G__28056 = cljs.core.count(c__4148__auto___28053);
var G__28057 = 0;
seq__28037_28042 = G__28054;
chunk__28038_28043 = G__28055;
count__28039_28044 = G__28056;
i__28040_28045 = G__28057;
continue;
}
} else
{var node_28058 = cljs.core.first(seq__28037_28052__$1);goog.dom.classes.set(node_28058,classes_28041__$1);
{
var G__28059 = cljs.core.next(seq__28037_28052__$1);
var G__28060 = null;
var G__28061 = 0;
var G__28062 = 0;
seq__28037_28042 = G__28059;
chunk__28038_28043 = G__28060;
count__28039_28044 = G__28061;
i__28040_28045 = G__28062;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28067_28071 = cljs.core.seq(domina.nodes(content));var chunk__28068_28072 = null;var count__28069_28073 = 0;var i__28070_28074 = 0;while(true){
if((i__28070_28074 < count__28069_28073))
{var node_28075 = chunk__28068_28072.cljs$core$IIndexed$_nth$arity$2(null,i__28070_28074);goog.dom.setTextContent(node_28075,value);
{
var G__28076 = seq__28067_28071;
var G__28077 = chunk__28068_28072;
var G__28078 = count__28069_28073;
var G__28079 = (i__28070_28074 + 1);
seq__28067_28071 = G__28076;
chunk__28068_28072 = G__28077;
count__28069_28073 = G__28078;
i__28070_28074 = G__28079;
continue;
}
} else
{var temp__4092__auto___28080 = cljs.core.seq(seq__28067_28071);if(temp__4092__auto___28080)
{var seq__28067_28081__$1 = temp__4092__auto___28080;if(cljs.core.chunked_seq_QMARK_(seq__28067_28081__$1))
{var c__4148__auto___28082 = cljs.core.chunk_first(seq__28067_28081__$1);{
var G__28083 = cljs.core.chunk_rest(seq__28067_28081__$1);
var G__28084 = c__4148__auto___28082;
var G__28085 = cljs.core.count(c__4148__auto___28082);
var G__28086 = 0;
seq__28067_28071 = G__28083;
chunk__28068_28072 = G__28084;
count__28069_28073 = G__28085;
i__28070_28074 = G__28086;
continue;
}
} else
{var node_28087 = cljs.core.first(seq__28067_28081__$1);goog.dom.setTextContent(node_28087,value);
{
var G__28088 = cljs.core.next(seq__28067_28081__$1);
var G__28089 = null;
var G__28090 = 0;
var G__28091 = 0;
seq__28067_28071 = G__28088;
chunk__28068_28072 = G__28089;
count__28069_28073 = G__28090;
i__28070_28074 = G__28091;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28096_28100 = cljs.core.seq(domina.nodes(content));var chunk__28097_28101 = null;var count__28098_28102 = 0;var i__28099_28103 = 0;while(true){
if((i__28099_28103 < count__28098_28102))
{var node_28104 = chunk__28097_28101.cljs$core$IIndexed$_nth$arity$2(null,i__28099_28103);goog.dom.forms.setValue(node_28104,value);
{
var G__28105 = seq__28096_28100;
var G__28106 = chunk__28097_28101;
var G__28107 = count__28098_28102;
var G__28108 = (i__28099_28103 + 1);
seq__28096_28100 = G__28105;
chunk__28097_28101 = G__28106;
count__28098_28102 = G__28107;
i__28099_28103 = G__28108;
continue;
}
} else
{var temp__4092__auto___28109 = cljs.core.seq(seq__28096_28100);if(temp__4092__auto___28109)
{var seq__28096_28110__$1 = temp__4092__auto___28109;if(cljs.core.chunked_seq_QMARK_(seq__28096_28110__$1))
{var c__4148__auto___28111 = cljs.core.chunk_first(seq__28096_28110__$1);{
var G__28112 = cljs.core.chunk_rest(seq__28096_28110__$1);
var G__28113 = c__4148__auto___28111;
var G__28114 = cljs.core.count(c__4148__auto___28111);
var G__28115 = 0;
seq__28096_28100 = G__28112;
chunk__28097_28101 = G__28113;
count__28098_28102 = G__28114;
i__28099_28103 = G__28115;
continue;
}
} else
{var node_28116 = cljs.core.first(seq__28096_28110__$1);goog.dom.forms.setValue(node_28116,value);
{
var G__28117 = cljs.core.next(seq__28096_28110__$1);
var G__28118 = null;
var G__28119 = 0;
var G__28120 = 0;
seq__28096_28100 = G__28117;
chunk__28097_28101 = G__28118;
count__28098_28102 = G__28119;
i__28099_28103 = G__28120;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not(leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3394__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
}
})()))
{var value_28131 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28127_28132 = cljs.core.seq(domina.nodes(content));var chunk__28128_28133 = null;var count__28129_28134 = 0;var i__28130_28135 = 0;while(true){
if((i__28130_28135 < count__28129_28134))
{var node_28136 = chunk__28128_28133.cljs$core$IIndexed$_nth$arity$2(null,i__28130_28135);node_28136.innerHTML = value_28131;
{
var G__28137 = seq__28127_28132;
var G__28138 = chunk__28128_28133;
var G__28139 = count__28129_28134;
var G__28140 = (i__28130_28135 + 1);
seq__28127_28132 = G__28137;
chunk__28128_28133 = G__28138;
count__28129_28134 = G__28139;
i__28130_28135 = G__28140;
continue;
}
} else
{var temp__4092__auto___28141 = cljs.core.seq(seq__28127_28132);if(temp__4092__auto___28141)
{var seq__28127_28142__$1 = temp__4092__auto___28141;if(cljs.core.chunked_seq_QMARK_(seq__28127_28142__$1))
{var c__4148__auto___28143 = cljs.core.chunk_first(seq__28127_28142__$1);{
var G__28144 = cljs.core.chunk_rest(seq__28127_28142__$1);
var G__28145 = c__4148__auto___28143;
var G__28146 = cljs.core.count(c__4148__auto___28143);
var G__28147 = 0;
seq__28127_28132 = G__28144;
chunk__28128_28133 = G__28145;
count__28129_28134 = G__28146;
i__28130_28135 = G__28147;
continue;
}
} else
{var node_28148 = cljs.core.first(seq__28127_28142__$1);node_28148.innerHTML = value_28131;
{
var G__28149 = cljs.core.next(seq__28127_28142__$1);
var G__28150 = null;
var G__28151 = 0;
var G__28152 = 0;
seq__28127_28132 = G__28149;
chunk__28128_28133 = G__28150;
count__28129_28134 = G__28151;
i__28130_28135 = G__28152;
continue;
}
}
} else
{}
}
break;
}
}catch (e28126){if((e28126 instanceof Error))
{var e_28153 = e28126;domina.replace_children_BANG_(content,value_28131);
} else
{if(cljs.core.constant$keyword$237)
{throw e28126;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node(node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node(node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node(node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28160_28164 = cljs.core.seq(children);var chunk__28161_28165 = null;var count__28162_28166 = 0;var i__28163_28167 = 0;while(true){
if((i__28163_28167 < count__28162_28166))
{var child_28168 = chunk__28161_28165.cljs$core$IIndexed$_nth$arity$2(null,i__28163_28167);frag.appendChild(child_28168);
{
var G__28169 = seq__28160_28164;
var G__28170 = chunk__28161_28165;
var G__28171 = count__28162_28166;
var G__28172 = (i__28163_28167 + 1);
seq__28160_28164 = G__28169;
chunk__28161_28165 = G__28170;
count__28162_28166 = G__28171;
i__28163_28167 = G__28172;
continue;
}
} else
{var temp__4092__auto___28173 = cljs.core.seq(seq__28160_28164);if(temp__4092__auto___28173)
{var seq__28160_28174__$1 = temp__4092__auto___28173;if(cljs.core.chunked_seq_QMARK_(seq__28160_28174__$1))
{var c__4148__auto___28175 = cljs.core.chunk_first(seq__28160_28174__$1);{
var G__28176 = cljs.core.chunk_rest(seq__28160_28174__$1);
var G__28177 = c__4148__auto___28175;
var G__28178 = cljs.core.count(c__4148__auto___28175);
var G__28179 = 0;
seq__28160_28164 = G__28176;
chunk__28161_28165 = G__28177;
count__28162_28166 = G__28178;
i__28163_28167 = G__28179;
continue;
}
} else
{var child_28180 = cljs.core.first(seq__28160_28174__$1);frag.appendChild(child_28180);
{
var G__28181 = cljs.core.next(seq__28160_28174__$1);
var G__28182 = null;
var G__28183 = 0;
var G__28184 = 0;
seq__28160_28164 = G__28181;
chunk__28161_28165 = G__28182;
count__28162_28166 = G__28183;
i__28163_28167 = G__28184;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq(parents))
{(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cljs.core.first(parents),first_child) : f.call(null,cljs.core.first(parents),first_child));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28154_SHARP_,p2__28155_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28154_SHARP_,p2__28155_SHARP_) : f.call(null,p1__28154_SHARP_,p2__28155_SHARP_));
}),cljs.core.rest(parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons(nl.item(n),lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((nl[n]),lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not(obj.nodeName);if(and__3394__auto____$1)
{return obj.length;
} else
{return and__3394__auto____$1;
}
} else
{return and__3394__auto__;
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
{if((function (){var G__28186 = list_thing;if(G__28186)
{var bit__4050__auto__ = (G__28186.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28186.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28186.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28186);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28186);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$238)
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
{if((function (){var G__28187 = content;if(G__28187)
{var bit__4050__auto__ = (G__28187.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28187.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28187.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28187);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28187);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$238)
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
{if((function (){var G__28188 = content;if(G__28188)
{var bit__4050__auto__ = (G__28188.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28188.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28188.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28188);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28188);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$238)
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
