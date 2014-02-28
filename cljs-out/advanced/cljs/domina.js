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
var opt_wrapper_27715 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27716 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27717 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$245,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27716,table_section_wrapper_27716,opt_wrapper_27715,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27717,table_section_wrapper_27716,cell_wrapper_27717,opt_wrapper_27715,table_section_wrapper_27716,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27716]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27722 = cljs.core.seq(tbody);var chunk__27723 = null;var count__27724 = 0;var i__27725 = 0;while(true){
if((i__27725 < count__27724))
{var child = chunk__27723.cljs$core$IIndexed$_nth$arity$2(null,i__27725);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27726 = seq__27722;
var G__27727 = chunk__27723;
var G__27728 = count__27724;
var G__27729 = (i__27725 + 1);
seq__27722 = G__27726;
chunk__27723 = G__27727;
count__27724 = G__27728;
i__27725 = G__27729;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27722);if(temp__4092__auto__)
{var seq__27722__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27722__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27722__$1);{
var G__27730 = cljs.core.chunk_rest(seq__27722__$1);
var G__27731 = c__4148__auto__;
var G__27732 = cljs.core.count(c__4148__auto__);
var G__27733 = 0;
seq__27722 = G__27730;
chunk__27723 = G__27731;
count__27724 = G__27732;
i__27725 = G__27733;
continue;
}
} else
{var child = cljs.core.first(seq__27722__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27734 = cljs.core.next(seq__27722__$1);
var G__27735 = null;
var G__27736 = 0;
var G__27737 = 0;
seq__27722 = G__27734;
chunk__27723 = G__27735;
count__27724 = G__27736;
i__27725 = G__27737;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27739 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27739,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27740 = wrapper.lastChild;
var G__27741 = (level - 1);
wrapper = G__27740;
level = G__27741;
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
domina.DomContent = (function (){var obj27743 = {};return obj27743;
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
log_debug.cljs$lang$applyTo = (function (arglist__27744){
var mesg = cljs.core.seq(arglist__27744);
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
log.cljs$lang$applyTo = (function (arglist__27745){
var mesg = cljs.core.seq(arglist__27745);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27746){
var contents = cljs.core.seq(arglist__27746);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27747_SHARP_){return p1__27747_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27748_SHARP_,p2__27749_SHARP_){return goog.dom.insertChildAt(p1__27748_SHARP_,p2__27749_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27748_SHARP_,p2__27749_SHARP_){return goog.dom.insertChildAt(p1__27748_SHARP_,p2__27749_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27751_SHARP_,p2__27750_SHARP_){return goog.dom.insertSiblingBefore(p2__27750_SHARP_,p1__27751_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27751_SHARP_,p2__27750_SHARP_){return goog.dom.insertSiblingBefore(p2__27750_SHARP_,p1__27751_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27753_SHARP_,p2__27752_SHARP_){return goog.dom.insertSiblingAfter(p2__27752_SHARP_,p1__27753_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27753_SHARP_,p2__27752_SHARP_){return goog.dom.insertSiblingAfter(p2__27752_SHARP_,p1__27753_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27755_SHARP_,p2__27754_SHARP_){return goog.dom.replaceNode(p2__27754_SHARP_,p1__27755_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27755_SHARP_,p2__27754_SHARP_){return goog.dom.replaceNode(p2__27754_SHARP_,p1__27755_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27760_27764 = cljs.core.seq(domina.nodes(content));var chunk__27761_27765 = null;var count__27762_27766 = 0;var i__27763_27767 = 0;while(true){
if((i__27763_27767 < count__27762_27766))
{var n_27768 = chunk__27761_27765.cljs$core$IIndexed$_nth$arity$2(null,i__27763_27767);goog.style.setStyle(n_27768,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27769 = seq__27760_27764;
var G__27770 = chunk__27761_27765;
var G__27771 = count__27762_27766;
var G__27772 = (i__27763_27767 + 1);
seq__27760_27764 = G__27769;
chunk__27761_27765 = G__27770;
count__27762_27766 = G__27771;
i__27763_27767 = G__27772;
continue;
}
} else
{var temp__4092__auto___27773 = cljs.core.seq(seq__27760_27764);if(temp__4092__auto___27773)
{var seq__27760_27774__$1 = temp__4092__auto___27773;if(cljs.core.chunked_seq_QMARK_(seq__27760_27774__$1))
{var c__4148__auto___27775 = cljs.core.chunk_first(seq__27760_27774__$1);{
var G__27776 = cljs.core.chunk_rest(seq__27760_27774__$1);
var G__27777 = c__4148__auto___27775;
var G__27778 = cljs.core.count(c__4148__auto___27775);
var G__27779 = 0;
seq__27760_27764 = G__27776;
chunk__27761_27765 = G__27777;
count__27762_27766 = G__27778;
i__27763_27767 = G__27779;
continue;
}
} else
{var n_27780 = cljs.core.first(seq__27760_27774__$1);goog.style.setStyle(n_27780,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27781 = cljs.core.next(seq__27760_27774__$1);
var G__27782 = null;
var G__27783 = 0;
var G__27784 = 0;
seq__27760_27764 = G__27781;
chunk__27761_27765 = G__27782;
count__27762_27766 = G__27783;
i__27763_27767 = G__27784;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27785){
var content = cljs.core.first(arglist__27785);
arglist__27785 = cljs.core.next(arglist__27785);
var name = cljs.core.first(arglist__27785);
var value = cljs.core.rest(arglist__27785);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27790_27794 = cljs.core.seq(domina.nodes(content));var chunk__27791_27795 = null;var count__27792_27796 = 0;var i__27793_27797 = 0;while(true){
if((i__27793_27797 < count__27792_27796))
{var n_27798 = chunk__27791_27795.cljs$core$IIndexed$_nth$arity$2(null,i__27793_27797);n_27798.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27799 = seq__27790_27794;
var G__27800 = chunk__27791_27795;
var G__27801 = count__27792_27796;
var G__27802 = (i__27793_27797 + 1);
seq__27790_27794 = G__27799;
chunk__27791_27795 = G__27800;
count__27792_27796 = G__27801;
i__27793_27797 = G__27802;
continue;
}
} else
{var temp__4092__auto___27803 = cljs.core.seq(seq__27790_27794);if(temp__4092__auto___27803)
{var seq__27790_27804__$1 = temp__4092__auto___27803;if(cljs.core.chunked_seq_QMARK_(seq__27790_27804__$1))
{var c__4148__auto___27805 = cljs.core.chunk_first(seq__27790_27804__$1);{
var G__27806 = cljs.core.chunk_rest(seq__27790_27804__$1);
var G__27807 = c__4148__auto___27805;
var G__27808 = cljs.core.count(c__4148__auto___27805);
var G__27809 = 0;
seq__27790_27794 = G__27806;
chunk__27791_27795 = G__27807;
count__27792_27796 = G__27808;
i__27793_27797 = G__27809;
continue;
}
} else
{var n_27810 = cljs.core.first(seq__27790_27804__$1);n_27810.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27811 = cljs.core.next(seq__27790_27804__$1);
var G__27812 = null;
var G__27813 = 0;
var G__27814 = 0;
seq__27790_27794 = G__27811;
chunk__27791_27795 = G__27812;
count__27792_27796 = G__27813;
i__27793_27797 = G__27814;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27815){
var content = cljs.core.first(arglist__27815);
arglist__27815 = cljs.core.next(arglist__27815);
var name = cljs.core.first(arglist__27815);
var value = cljs.core.rest(arglist__27815);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27820_27824 = cljs.core.seq(domina.nodes(content));var chunk__27821_27825 = null;var count__27822_27826 = 0;var i__27823_27827 = 0;while(true){
if((i__27823_27827 < count__27822_27826))
{var n_27828 = chunk__27821_27825.cljs$core$IIndexed$_nth$arity$2(null,i__27823_27827);n_27828.removeAttribute(cljs.core.name(name));
{
var G__27829 = seq__27820_27824;
var G__27830 = chunk__27821_27825;
var G__27831 = count__27822_27826;
var G__27832 = (i__27823_27827 + 1);
seq__27820_27824 = G__27829;
chunk__27821_27825 = G__27830;
count__27822_27826 = G__27831;
i__27823_27827 = G__27832;
continue;
}
} else
{var temp__4092__auto___27833 = cljs.core.seq(seq__27820_27824);if(temp__4092__auto___27833)
{var seq__27820_27834__$1 = temp__4092__auto___27833;if(cljs.core.chunked_seq_QMARK_(seq__27820_27834__$1))
{var c__4148__auto___27835 = cljs.core.chunk_first(seq__27820_27834__$1);{
var G__27836 = cljs.core.chunk_rest(seq__27820_27834__$1);
var G__27837 = c__4148__auto___27835;
var G__27838 = cljs.core.count(c__4148__auto___27835);
var G__27839 = 0;
seq__27820_27824 = G__27836;
chunk__27821_27825 = G__27837;
count__27822_27826 = G__27838;
i__27823_27827 = G__27839;
continue;
}
} else
{var n_27840 = cljs.core.first(seq__27820_27834__$1);n_27840.removeAttribute(cljs.core.name(name));
{
var G__27841 = cljs.core.next(seq__27820_27834__$1);
var G__27842 = null;
var G__27843 = 0;
var G__27844 = 0;
seq__27820_27824 = G__27841;
chunk__27821_27825 = G__27842;
count__27822_27826 = G__27843;
i__27823_27827 = G__27844;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27846 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27846,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27846,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$244)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27847_SHARP_){var attr = attrs__$1.item(p1__27847_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27854_27860 = cljs.core.seq(styles);var chunk__27855_27861 = null;var count__27856_27862 = 0;var i__27857_27863 = 0;while(true){
if((i__27857_27863 < count__27856_27862))
{var vec__27858_27864 = chunk__27855_27861.cljs$core$IIndexed$_nth$arity$2(null,i__27857_27863);var name_27865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858_27864,0,null);var value_27866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27858_27864,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27865,cljs.core.array_seq([value_27866], 0));
{
var G__27867 = seq__27854_27860;
var G__27868 = chunk__27855_27861;
var G__27869 = count__27856_27862;
var G__27870 = (i__27857_27863 + 1);
seq__27854_27860 = G__27867;
chunk__27855_27861 = G__27868;
count__27856_27862 = G__27869;
i__27857_27863 = G__27870;
continue;
}
} else
{var temp__4092__auto___27871 = cljs.core.seq(seq__27854_27860);if(temp__4092__auto___27871)
{var seq__27854_27872__$1 = temp__4092__auto___27871;if(cljs.core.chunked_seq_QMARK_(seq__27854_27872__$1))
{var c__4148__auto___27873 = cljs.core.chunk_first(seq__27854_27872__$1);{
var G__27874 = cljs.core.chunk_rest(seq__27854_27872__$1);
var G__27875 = c__4148__auto___27873;
var G__27876 = cljs.core.count(c__4148__auto___27873);
var G__27877 = 0;
seq__27854_27860 = G__27874;
chunk__27855_27861 = G__27875;
count__27856_27862 = G__27876;
i__27857_27863 = G__27877;
continue;
}
} else
{var vec__27859_27878 = cljs.core.first(seq__27854_27872__$1);var name_27879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859_27878,0,null);var value_27880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27859_27878,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27879,cljs.core.array_seq([value_27880], 0));
{
var G__27881 = cljs.core.next(seq__27854_27872__$1);
var G__27882 = null;
var G__27883 = 0;
var G__27884 = 0;
seq__27854_27860 = G__27881;
chunk__27855_27861 = G__27882;
count__27856_27862 = G__27883;
i__27857_27863 = G__27884;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27891_27897 = cljs.core.seq(attrs);var chunk__27892_27898 = null;var count__27893_27899 = 0;var i__27894_27900 = 0;while(true){
if((i__27894_27900 < count__27893_27899))
{var vec__27895_27901 = chunk__27892_27898.cljs$core$IIndexed$_nth$arity$2(null,i__27894_27900);var name_27902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895_27901,0,null);var value_27903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27895_27901,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27902,cljs.core.array_seq([value_27903], 0));
{
var G__27904 = seq__27891_27897;
var G__27905 = chunk__27892_27898;
var G__27906 = count__27893_27899;
var G__27907 = (i__27894_27900 + 1);
seq__27891_27897 = G__27904;
chunk__27892_27898 = G__27905;
count__27893_27899 = G__27906;
i__27894_27900 = G__27907;
continue;
}
} else
{var temp__4092__auto___27908 = cljs.core.seq(seq__27891_27897);if(temp__4092__auto___27908)
{var seq__27891_27909__$1 = temp__4092__auto___27908;if(cljs.core.chunked_seq_QMARK_(seq__27891_27909__$1))
{var c__4148__auto___27910 = cljs.core.chunk_first(seq__27891_27909__$1);{
var G__27911 = cljs.core.chunk_rest(seq__27891_27909__$1);
var G__27912 = c__4148__auto___27910;
var G__27913 = cljs.core.count(c__4148__auto___27910);
var G__27914 = 0;
seq__27891_27897 = G__27911;
chunk__27892_27898 = G__27912;
count__27893_27899 = G__27913;
i__27894_27900 = G__27914;
continue;
}
} else
{var vec__27896_27915 = cljs.core.first(seq__27891_27909__$1);var name_27916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896_27915,0,null);var value_27917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27896_27915,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27916,cljs.core.array_seq([value_27917], 0));
{
var G__27918 = cljs.core.next(seq__27891_27909__$1);
var G__27919 = null;
var G__27920 = 0;
var G__27921 = 0;
seq__27891_27897 = G__27918;
chunk__27892_27898 = G__27919;
count__27893_27899 = G__27920;
i__27894_27900 = G__27921;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27926_27930 = cljs.core.seq(domina.nodes(content));var chunk__27927_27931 = null;var count__27928_27932 = 0;var i__27929_27933 = 0;while(true){
if((i__27929_27933 < count__27928_27932))
{var node_27934 = chunk__27927_27931.cljs$core$IIndexed$_nth$arity$2(null,i__27929_27933);goog.dom.classes.add(node_27934,class$);
{
var G__27935 = seq__27926_27930;
var G__27936 = chunk__27927_27931;
var G__27937 = count__27928_27932;
var G__27938 = (i__27929_27933 + 1);
seq__27926_27930 = G__27935;
chunk__27927_27931 = G__27936;
count__27928_27932 = G__27937;
i__27929_27933 = G__27938;
continue;
}
} else
{var temp__4092__auto___27939 = cljs.core.seq(seq__27926_27930);if(temp__4092__auto___27939)
{var seq__27926_27940__$1 = temp__4092__auto___27939;if(cljs.core.chunked_seq_QMARK_(seq__27926_27940__$1))
{var c__4148__auto___27941 = cljs.core.chunk_first(seq__27926_27940__$1);{
var G__27942 = cljs.core.chunk_rest(seq__27926_27940__$1);
var G__27943 = c__4148__auto___27941;
var G__27944 = cljs.core.count(c__4148__auto___27941);
var G__27945 = 0;
seq__27926_27930 = G__27942;
chunk__27927_27931 = G__27943;
count__27928_27932 = G__27944;
i__27929_27933 = G__27945;
continue;
}
} else
{var node_27946 = cljs.core.first(seq__27926_27940__$1);goog.dom.classes.add(node_27946,class$);
{
var G__27947 = cljs.core.next(seq__27926_27940__$1);
var G__27948 = null;
var G__27949 = 0;
var G__27950 = 0;
seq__27926_27930 = G__27947;
chunk__27927_27931 = G__27948;
count__27928_27932 = G__27949;
i__27929_27933 = G__27950;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27955_27959 = cljs.core.seq(domina.nodes(content));var chunk__27956_27960 = null;var count__27957_27961 = 0;var i__27958_27962 = 0;while(true){
if((i__27958_27962 < count__27957_27961))
{var node_27963 = chunk__27956_27960.cljs$core$IIndexed$_nth$arity$2(null,i__27958_27962);goog.dom.classes.remove(node_27963,class$);
{
var G__27964 = seq__27955_27959;
var G__27965 = chunk__27956_27960;
var G__27966 = count__27957_27961;
var G__27967 = (i__27958_27962 + 1);
seq__27955_27959 = G__27964;
chunk__27956_27960 = G__27965;
count__27957_27961 = G__27966;
i__27958_27962 = G__27967;
continue;
}
} else
{var temp__4092__auto___27968 = cljs.core.seq(seq__27955_27959);if(temp__4092__auto___27968)
{var seq__27955_27969__$1 = temp__4092__auto___27968;if(cljs.core.chunked_seq_QMARK_(seq__27955_27969__$1))
{var c__4148__auto___27970 = cljs.core.chunk_first(seq__27955_27969__$1);{
var G__27971 = cljs.core.chunk_rest(seq__27955_27969__$1);
var G__27972 = c__4148__auto___27970;
var G__27973 = cljs.core.count(c__4148__auto___27970);
var G__27974 = 0;
seq__27955_27959 = G__27971;
chunk__27956_27960 = G__27972;
count__27957_27961 = G__27973;
i__27958_27962 = G__27974;
continue;
}
} else
{var node_27975 = cljs.core.first(seq__27955_27969__$1);goog.dom.classes.remove(node_27975,class$);
{
var G__27976 = cljs.core.next(seq__27955_27969__$1);
var G__27977 = null;
var G__27978 = 0;
var G__27979 = 0;
seq__27955_27959 = G__27976;
chunk__27956_27960 = G__27977;
count__27957_27961 = G__27978;
i__27958_27962 = G__27979;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27984_27988 = cljs.core.seq(domina.nodes(content));var chunk__27985_27989 = null;var count__27986_27990 = 0;var i__27987_27991 = 0;while(true){
if((i__27987_27991 < count__27986_27990))
{var node_27992 = chunk__27985_27989.cljs$core$IIndexed$_nth$arity$2(null,i__27987_27991);goog.dom.classes.toggle(node_27992,class$);
{
var G__27993 = seq__27984_27988;
var G__27994 = chunk__27985_27989;
var G__27995 = count__27986_27990;
var G__27996 = (i__27987_27991 + 1);
seq__27984_27988 = G__27993;
chunk__27985_27989 = G__27994;
count__27986_27990 = G__27995;
i__27987_27991 = G__27996;
continue;
}
} else
{var temp__4092__auto___27997 = cljs.core.seq(seq__27984_27988);if(temp__4092__auto___27997)
{var seq__27984_27998__$1 = temp__4092__auto___27997;if(cljs.core.chunked_seq_QMARK_(seq__27984_27998__$1))
{var c__4148__auto___27999 = cljs.core.chunk_first(seq__27984_27998__$1);{
var G__28000 = cljs.core.chunk_rest(seq__27984_27998__$1);
var G__28001 = c__4148__auto___27999;
var G__28002 = cljs.core.count(c__4148__auto___27999);
var G__28003 = 0;
seq__27984_27988 = G__28000;
chunk__27985_27989 = G__28001;
count__27986_27990 = G__28002;
i__27987_27991 = G__28003;
continue;
}
} else
{var node_28004 = cljs.core.first(seq__27984_27998__$1);goog.dom.classes.toggle(node_28004,class$);
{
var G__28005 = cljs.core.next(seq__27984_27998__$1);
var G__28006 = null;
var G__28007 = 0;
var G__28008 = 0;
seq__27984_27988 = G__28005;
chunk__27985_27989 = G__28006;
count__27986_27990 = G__28007;
i__27987_27991 = G__28008;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28017__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__28013_28018 = cljs.core.seq(domina.nodes(content));var chunk__28014_28019 = null;var count__28015_28020 = 0;var i__28016_28021 = 0;while(true){
if((i__28016_28021 < count__28015_28020))
{var node_28022 = chunk__28014_28019.cljs$core$IIndexed$_nth$arity$2(null,i__28016_28021);goog.dom.classes.set(node_28022,classes_28017__$1);
{
var G__28023 = seq__28013_28018;
var G__28024 = chunk__28014_28019;
var G__28025 = count__28015_28020;
var G__28026 = (i__28016_28021 + 1);
seq__28013_28018 = G__28023;
chunk__28014_28019 = G__28024;
count__28015_28020 = G__28025;
i__28016_28021 = G__28026;
continue;
}
} else
{var temp__4092__auto___28027 = cljs.core.seq(seq__28013_28018);if(temp__4092__auto___28027)
{var seq__28013_28028__$1 = temp__4092__auto___28027;if(cljs.core.chunked_seq_QMARK_(seq__28013_28028__$1))
{var c__4148__auto___28029 = cljs.core.chunk_first(seq__28013_28028__$1);{
var G__28030 = cljs.core.chunk_rest(seq__28013_28028__$1);
var G__28031 = c__4148__auto___28029;
var G__28032 = cljs.core.count(c__4148__auto___28029);
var G__28033 = 0;
seq__28013_28018 = G__28030;
chunk__28014_28019 = G__28031;
count__28015_28020 = G__28032;
i__28016_28021 = G__28033;
continue;
}
} else
{var node_28034 = cljs.core.first(seq__28013_28028__$1);goog.dom.classes.set(node_28034,classes_28017__$1);
{
var G__28035 = cljs.core.next(seq__28013_28028__$1);
var G__28036 = null;
var G__28037 = 0;
var G__28038 = 0;
seq__28013_28018 = G__28035;
chunk__28014_28019 = G__28036;
count__28015_28020 = G__28037;
i__28016_28021 = G__28038;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28043_28047 = cljs.core.seq(domina.nodes(content));var chunk__28044_28048 = null;var count__28045_28049 = 0;var i__28046_28050 = 0;while(true){
if((i__28046_28050 < count__28045_28049))
{var node_28051 = chunk__28044_28048.cljs$core$IIndexed$_nth$arity$2(null,i__28046_28050);goog.dom.setTextContent(node_28051,value);
{
var G__28052 = seq__28043_28047;
var G__28053 = chunk__28044_28048;
var G__28054 = count__28045_28049;
var G__28055 = (i__28046_28050 + 1);
seq__28043_28047 = G__28052;
chunk__28044_28048 = G__28053;
count__28045_28049 = G__28054;
i__28046_28050 = G__28055;
continue;
}
} else
{var temp__4092__auto___28056 = cljs.core.seq(seq__28043_28047);if(temp__4092__auto___28056)
{var seq__28043_28057__$1 = temp__4092__auto___28056;if(cljs.core.chunked_seq_QMARK_(seq__28043_28057__$1))
{var c__4148__auto___28058 = cljs.core.chunk_first(seq__28043_28057__$1);{
var G__28059 = cljs.core.chunk_rest(seq__28043_28057__$1);
var G__28060 = c__4148__auto___28058;
var G__28061 = cljs.core.count(c__4148__auto___28058);
var G__28062 = 0;
seq__28043_28047 = G__28059;
chunk__28044_28048 = G__28060;
count__28045_28049 = G__28061;
i__28046_28050 = G__28062;
continue;
}
} else
{var node_28063 = cljs.core.first(seq__28043_28057__$1);goog.dom.setTextContent(node_28063,value);
{
var G__28064 = cljs.core.next(seq__28043_28057__$1);
var G__28065 = null;
var G__28066 = 0;
var G__28067 = 0;
seq__28043_28047 = G__28064;
chunk__28044_28048 = G__28065;
count__28045_28049 = G__28066;
i__28046_28050 = G__28067;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28072_28076 = cljs.core.seq(domina.nodes(content));var chunk__28073_28077 = null;var count__28074_28078 = 0;var i__28075_28079 = 0;while(true){
if((i__28075_28079 < count__28074_28078))
{var node_28080 = chunk__28073_28077.cljs$core$IIndexed$_nth$arity$2(null,i__28075_28079);goog.dom.forms.setValue(node_28080,value);
{
var G__28081 = seq__28072_28076;
var G__28082 = chunk__28073_28077;
var G__28083 = count__28074_28078;
var G__28084 = (i__28075_28079 + 1);
seq__28072_28076 = G__28081;
chunk__28073_28077 = G__28082;
count__28074_28078 = G__28083;
i__28075_28079 = G__28084;
continue;
}
} else
{var temp__4092__auto___28085 = cljs.core.seq(seq__28072_28076);if(temp__4092__auto___28085)
{var seq__28072_28086__$1 = temp__4092__auto___28085;if(cljs.core.chunked_seq_QMARK_(seq__28072_28086__$1))
{var c__4148__auto___28087 = cljs.core.chunk_first(seq__28072_28086__$1);{
var G__28088 = cljs.core.chunk_rest(seq__28072_28086__$1);
var G__28089 = c__4148__auto___28087;
var G__28090 = cljs.core.count(c__4148__auto___28087);
var G__28091 = 0;
seq__28072_28076 = G__28088;
chunk__28073_28077 = G__28089;
count__28074_28078 = G__28090;
i__28075_28079 = G__28091;
continue;
}
} else
{var node_28092 = cljs.core.first(seq__28072_28086__$1);goog.dom.forms.setValue(node_28092,value);
{
var G__28093 = cljs.core.next(seq__28072_28086__$1);
var G__28094 = null;
var G__28095 = 0;
var G__28096 = 0;
seq__28072_28076 = G__28093;
chunk__28073_28077 = G__28094;
count__28074_28078 = G__28095;
i__28075_28079 = G__28096;
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
{var value_28107 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28103_28108 = cljs.core.seq(domina.nodes(content));var chunk__28104_28109 = null;var count__28105_28110 = 0;var i__28106_28111 = 0;while(true){
if((i__28106_28111 < count__28105_28110))
{var node_28112 = chunk__28104_28109.cljs$core$IIndexed$_nth$arity$2(null,i__28106_28111);node_28112.innerHTML = value_28107;
{
var G__28113 = seq__28103_28108;
var G__28114 = chunk__28104_28109;
var G__28115 = count__28105_28110;
var G__28116 = (i__28106_28111 + 1);
seq__28103_28108 = G__28113;
chunk__28104_28109 = G__28114;
count__28105_28110 = G__28115;
i__28106_28111 = G__28116;
continue;
}
} else
{var temp__4092__auto___28117 = cljs.core.seq(seq__28103_28108);if(temp__4092__auto___28117)
{var seq__28103_28118__$1 = temp__4092__auto___28117;if(cljs.core.chunked_seq_QMARK_(seq__28103_28118__$1))
{var c__4148__auto___28119 = cljs.core.chunk_first(seq__28103_28118__$1);{
var G__28120 = cljs.core.chunk_rest(seq__28103_28118__$1);
var G__28121 = c__4148__auto___28119;
var G__28122 = cljs.core.count(c__4148__auto___28119);
var G__28123 = 0;
seq__28103_28108 = G__28120;
chunk__28104_28109 = G__28121;
count__28105_28110 = G__28122;
i__28106_28111 = G__28123;
continue;
}
} else
{var node_28124 = cljs.core.first(seq__28103_28118__$1);node_28124.innerHTML = value_28107;
{
var G__28125 = cljs.core.next(seq__28103_28118__$1);
var G__28126 = null;
var G__28127 = 0;
var G__28128 = 0;
seq__28103_28108 = G__28125;
chunk__28104_28109 = G__28126;
count__28105_28110 = G__28127;
i__28106_28111 = G__28128;
continue;
}
}
} else
{}
}
break;
}
}catch (e28102){if((e28102 instanceof Error))
{var e_28129 = e28102;domina.replace_children_BANG_(content,value_28107);
} else
{if(cljs.core.constant$keyword$244)
{throw e28102;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28136_28140 = cljs.core.seq(children);var chunk__28137_28141 = null;var count__28138_28142 = 0;var i__28139_28143 = 0;while(true){
if((i__28139_28143 < count__28138_28142))
{var child_28144 = chunk__28137_28141.cljs$core$IIndexed$_nth$arity$2(null,i__28139_28143);frag.appendChild(child_28144);
{
var G__28145 = seq__28136_28140;
var G__28146 = chunk__28137_28141;
var G__28147 = count__28138_28142;
var G__28148 = (i__28139_28143 + 1);
seq__28136_28140 = G__28145;
chunk__28137_28141 = G__28146;
count__28138_28142 = G__28147;
i__28139_28143 = G__28148;
continue;
}
} else
{var temp__4092__auto___28149 = cljs.core.seq(seq__28136_28140);if(temp__4092__auto___28149)
{var seq__28136_28150__$1 = temp__4092__auto___28149;if(cljs.core.chunked_seq_QMARK_(seq__28136_28150__$1))
{var c__4148__auto___28151 = cljs.core.chunk_first(seq__28136_28150__$1);{
var G__28152 = cljs.core.chunk_rest(seq__28136_28150__$1);
var G__28153 = c__4148__auto___28151;
var G__28154 = cljs.core.count(c__4148__auto___28151);
var G__28155 = 0;
seq__28136_28140 = G__28152;
chunk__28137_28141 = G__28153;
count__28138_28142 = G__28154;
i__28139_28143 = G__28155;
continue;
}
} else
{var child_28156 = cljs.core.first(seq__28136_28150__$1);frag.appendChild(child_28156);
{
var G__28157 = cljs.core.next(seq__28136_28150__$1);
var G__28158 = null;
var G__28159 = 0;
var G__28160 = 0;
seq__28136_28140 = G__28157;
chunk__28137_28141 = G__28158;
count__28138_28142 = G__28159;
i__28139_28143 = G__28160;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28130_SHARP_,p2__28131_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28130_SHARP_,p2__28131_SHARP_) : f.call(null,p1__28130_SHARP_,p2__28131_SHARP_));
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
{if((function (){var G__28162 = list_thing;if(G__28162)
{var bit__4050__auto__ = (G__28162.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28162.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28162.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28162);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28162);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$245)
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
{if((function (){var G__28163 = content;if(G__28163)
{var bit__4050__auto__ = (G__28163.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28163.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28163.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28163);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28163);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$245)
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
{if((function (){var G__28164 = content;if(G__28164)
{var bit__4050__auto__ = (G__28164.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28164.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28164.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28164);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28164);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$245)
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
