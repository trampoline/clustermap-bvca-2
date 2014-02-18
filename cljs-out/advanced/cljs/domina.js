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
var opt_wrapper_27657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27658 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27659 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$231,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27658,table_section_wrapper_27658,opt_wrapper_27657,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27659,table_section_wrapper_27658,cell_wrapper_27659,opt_wrapper_27657,table_section_wrapper_27658,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27658]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27664 = cljs.core.seq(tbody);var chunk__27665 = null;var count__27666 = 0;var i__27667 = 0;while(true){
if((i__27667 < count__27666))
{var child = chunk__27665.cljs$core$IIndexed$_nth$arity$2(null,i__27667);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27668 = seq__27664;
var G__27669 = chunk__27665;
var G__27670 = count__27666;
var G__27671 = (i__27667 + 1);
seq__27664 = G__27668;
chunk__27665 = G__27669;
count__27666 = G__27670;
i__27667 = G__27671;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27664);if(temp__4092__auto__)
{var seq__27664__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27664__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27664__$1);{
var G__27672 = cljs.core.chunk_rest(seq__27664__$1);
var G__27673 = c__4148__auto__;
var G__27674 = cljs.core.count(c__4148__auto__);
var G__27675 = 0;
seq__27664 = G__27672;
chunk__27665 = G__27673;
count__27666 = G__27674;
i__27667 = G__27675;
continue;
}
} else
{var child = cljs.core.first(seq__27664__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27676 = cljs.core.next(seq__27664__$1);
var G__27677 = null;
var G__27678 = 0;
var G__27679 = 0;
seq__27664 = G__27676;
chunk__27665 = G__27677;
count__27666 = G__27678;
i__27667 = G__27679;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27681 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27681,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27681,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27681,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27682 = wrapper.lastChild;
var G__27683 = (level - 1);
wrapper = G__27682;
level = G__27683;
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
domina.DomContent = (function (){var obj27685 = {};return obj27685;
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
log_debug.cljs$lang$applyTo = (function (arglist__27686){
var mesg = cljs.core.seq(arglist__27686);
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
log.cljs$lang$applyTo = (function (arglist__27687){
var mesg = cljs.core.seq(arglist__27687);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27688){
var contents = cljs.core.seq(arglist__27688);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27689_SHARP_){return p1__27689_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27690_SHARP_,p2__27691_SHARP_){return goog.dom.insertChildAt(p1__27690_SHARP_,p2__27691_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27690_SHARP_,p2__27691_SHARP_){return goog.dom.insertChildAt(p1__27690_SHARP_,p2__27691_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27693_SHARP_,p2__27692_SHARP_){return goog.dom.insertSiblingBefore(p2__27692_SHARP_,p1__27693_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27693_SHARP_,p2__27692_SHARP_){return goog.dom.insertSiblingBefore(p2__27692_SHARP_,p1__27693_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27695_SHARP_,p2__27694_SHARP_){return goog.dom.insertSiblingAfter(p2__27694_SHARP_,p1__27695_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27695_SHARP_,p2__27694_SHARP_){return goog.dom.insertSiblingAfter(p2__27694_SHARP_,p1__27695_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27697_SHARP_,p2__27696_SHARP_){return goog.dom.replaceNode(p2__27696_SHARP_,p1__27697_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27697_SHARP_,p2__27696_SHARP_){return goog.dom.replaceNode(p2__27696_SHARP_,p1__27697_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27702_27706 = cljs.core.seq(domina.nodes(content));var chunk__27703_27707 = null;var count__27704_27708 = 0;var i__27705_27709 = 0;while(true){
if((i__27705_27709 < count__27704_27708))
{var n_27710 = chunk__27703_27707.cljs$core$IIndexed$_nth$arity$2(null,i__27705_27709);goog.style.setStyle(n_27710,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27711 = seq__27702_27706;
var G__27712 = chunk__27703_27707;
var G__27713 = count__27704_27708;
var G__27714 = (i__27705_27709 + 1);
seq__27702_27706 = G__27711;
chunk__27703_27707 = G__27712;
count__27704_27708 = G__27713;
i__27705_27709 = G__27714;
continue;
}
} else
{var temp__4092__auto___27715 = cljs.core.seq(seq__27702_27706);if(temp__4092__auto___27715)
{var seq__27702_27716__$1 = temp__4092__auto___27715;if(cljs.core.chunked_seq_QMARK_(seq__27702_27716__$1))
{var c__4148__auto___27717 = cljs.core.chunk_first(seq__27702_27716__$1);{
var G__27718 = cljs.core.chunk_rest(seq__27702_27716__$1);
var G__27719 = c__4148__auto___27717;
var G__27720 = cljs.core.count(c__4148__auto___27717);
var G__27721 = 0;
seq__27702_27706 = G__27718;
chunk__27703_27707 = G__27719;
count__27704_27708 = G__27720;
i__27705_27709 = G__27721;
continue;
}
} else
{var n_27722 = cljs.core.first(seq__27702_27716__$1);goog.style.setStyle(n_27722,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27723 = cljs.core.next(seq__27702_27716__$1);
var G__27724 = null;
var G__27725 = 0;
var G__27726 = 0;
seq__27702_27706 = G__27723;
chunk__27703_27707 = G__27724;
count__27704_27708 = G__27725;
i__27705_27709 = G__27726;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27727){
var content = cljs.core.first(arglist__27727);
arglist__27727 = cljs.core.next(arglist__27727);
var name = cljs.core.first(arglist__27727);
var value = cljs.core.rest(arglist__27727);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27732_27736 = cljs.core.seq(domina.nodes(content));var chunk__27733_27737 = null;var count__27734_27738 = 0;var i__27735_27739 = 0;while(true){
if((i__27735_27739 < count__27734_27738))
{var n_27740 = chunk__27733_27737.cljs$core$IIndexed$_nth$arity$2(null,i__27735_27739);n_27740.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27741 = seq__27732_27736;
var G__27742 = chunk__27733_27737;
var G__27743 = count__27734_27738;
var G__27744 = (i__27735_27739 + 1);
seq__27732_27736 = G__27741;
chunk__27733_27737 = G__27742;
count__27734_27738 = G__27743;
i__27735_27739 = G__27744;
continue;
}
} else
{var temp__4092__auto___27745 = cljs.core.seq(seq__27732_27736);if(temp__4092__auto___27745)
{var seq__27732_27746__$1 = temp__4092__auto___27745;if(cljs.core.chunked_seq_QMARK_(seq__27732_27746__$1))
{var c__4148__auto___27747 = cljs.core.chunk_first(seq__27732_27746__$1);{
var G__27748 = cljs.core.chunk_rest(seq__27732_27746__$1);
var G__27749 = c__4148__auto___27747;
var G__27750 = cljs.core.count(c__4148__auto___27747);
var G__27751 = 0;
seq__27732_27736 = G__27748;
chunk__27733_27737 = G__27749;
count__27734_27738 = G__27750;
i__27735_27739 = G__27751;
continue;
}
} else
{var n_27752 = cljs.core.first(seq__27732_27746__$1);n_27752.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27753 = cljs.core.next(seq__27732_27746__$1);
var G__27754 = null;
var G__27755 = 0;
var G__27756 = 0;
seq__27732_27736 = G__27753;
chunk__27733_27737 = G__27754;
count__27734_27738 = G__27755;
i__27735_27739 = G__27756;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27757){
var content = cljs.core.first(arglist__27757);
arglist__27757 = cljs.core.next(arglist__27757);
var name = cljs.core.first(arglist__27757);
var value = cljs.core.rest(arglist__27757);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27762_27766 = cljs.core.seq(domina.nodes(content));var chunk__27763_27767 = null;var count__27764_27768 = 0;var i__27765_27769 = 0;while(true){
if((i__27765_27769 < count__27764_27768))
{var n_27770 = chunk__27763_27767.cljs$core$IIndexed$_nth$arity$2(null,i__27765_27769);n_27770.removeAttribute(cljs.core.name(name));
{
var G__27771 = seq__27762_27766;
var G__27772 = chunk__27763_27767;
var G__27773 = count__27764_27768;
var G__27774 = (i__27765_27769 + 1);
seq__27762_27766 = G__27771;
chunk__27763_27767 = G__27772;
count__27764_27768 = G__27773;
i__27765_27769 = G__27774;
continue;
}
} else
{var temp__4092__auto___27775 = cljs.core.seq(seq__27762_27766);if(temp__4092__auto___27775)
{var seq__27762_27776__$1 = temp__4092__auto___27775;if(cljs.core.chunked_seq_QMARK_(seq__27762_27776__$1))
{var c__4148__auto___27777 = cljs.core.chunk_first(seq__27762_27776__$1);{
var G__27778 = cljs.core.chunk_rest(seq__27762_27776__$1);
var G__27779 = c__4148__auto___27777;
var G__27780 = cljs.core.count(c__4148__auto___27777);
var G__27781 = 0;
seq__27762_27766 = G__27778;
chunk__27763_27767 = G__27779;
count__27764_27768 = G__27780;
i__27765_27769 = G__27781;
continue;
}
} else
{var n_27782 = cljs.core.first(seq__27762_27776__$1);n_27782.removeAttribute(cljs.core.name(name));
{
var G__27783 = cljs.core.next(seq__27762_27776__$1);
var G__27784 = null;
var G__27785 = 0;
var G__27786 = 0;
seq__27762_27766 = G__27783;
chunk__27763_27767 = G__27784;
count__27764_27768 = G__27785;
i__27765_27769 = G__27786;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27788 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27788,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27788,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$230)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27789_SHARP_){var attr = attrs__$1.item(p1__27789_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27796_27802 = cljs.core.seq(styles);var chunk__27797_27803 = null;var count__27798_27804 = 0;var i__27799_27805 = 0;while(true){
if((i__27799_27805 < count__27798_27804))
{var vec__27800_27806 = chunk__27797_27803.cljs$core$IIndexed$_nth$arity$2(null,i__27799_27805);var name_27807 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27800_27806,0,null);var value_27808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27800_27806,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27807,cljs.core.array_seq([value_27808], 0));
{
var G__27809 = seq__27796_27802;
var G__27810 = chunk__27797_27803;
var G__27811 = count__27798_27804;
var G__27812 = (i__27799_27805 + 1);
seq__27796_27802 = G__27809;
chunk__27797_27803 = G__27810;
count__27798_27804 = G__27811;
i__27799_27805 = G__27812;
continue;
}
} else
{var temp__4092__auto___27813 = cljs.core.seq(seq__27796_27802);if(temp__4092__auto___27813)
{var seq__27796_27814__$1 = temp__4092__auto___27813;if(cljs.core.chunked_seq_QMARK_(seq__27796_27814__$1))
{var c__4148__auto___27815 = cljs.core.chunk_first(seq__27796_27814__$1);{
var G__27816 = cljs.core.chunk_rest(seq__27796_27814__$1);
var G__27817 = c__4148__auto___27815;
var G__27818 = cljs.core.count(c__4148__auto___27815);
var G__27819 = 0;
seq__27796_27802 = G__27816;
chunk__27797_27803 = G__27817;
count__27798_27804 = G__27818;
i__27799_27805 = G__27819;
continue;
}
} else
{var vec__27801_27820 = cljs.core.first(seq__27796_27814__$1);var name_27821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27820,0,null);var value_27822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27801_27820,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27821,cljs.core.array_seq([value_27822], 0));
{
var G__27823 = cljs.core.next(seq__27796_27814__$1);
var G__27824 = null;
var G__27825 = 0;
var G__27826 = 0;
seq__27796_27802 = G__27823;
chunk__27797_27803 = G__27824;
count__27798_27804 = G__27825;
i__27799_27805 = G__27826;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27833_27839 = cljs.core.seq(attrs);var chunk__27834_27840 = null;var count__27835_27841 = 0;var i__27836_27842 = 0;while(true){
if((i__27836_27842 < count__27835_27841))
{var vec__27837_27843 = chunk__27834_27840.cljs$core$IIndexed$_nth$arity$2(null,i__27836_27842);var name_27844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837_27843,0,null);var value_27845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27837_27843,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27844,cljs.core.array_seq([value_27845], 0));
{
var G__27846 = seq__27833_27839;
var G__27847 = chunk__27834_27840;
var G__27848 = count__27835_27841;
var G__27849 = (i__27836_27842 + 1);
seq__27833_27839 = G__27846;
chunk__27834_27840 = G__27847;
count__27835_27841 = G__27848;
i__27836_27842 = G__27849;
continue;
}
} else
{var temp__4092__auto___27850 = cljs.core.seq(seq__27833_27839);if(temp__4092__auto___27850)
{var seq__27833_27851__$1 = temp__4092__auto___27850;if(cljs.core.chunked_seq_QMARK_(seq__27833_27851__$1))
{var c__4148__auto___27852 = cljs.core.chunk_first(seq__27833_27851__$1);{
var G__27853 = cljs.core.chunk_rest(seq__27833_27851__$1);
var G__27854 = c__4148__auto___27852;
var G__27855 = cljs.core.count(c__4148__auto___27852);
var G__27856 = 0;
seq__27833_27839 = G__27853;
chunk__27834_27840 = G__27854;
count__27835_27841 = G__27855;
i__27836_27842 = G__27856;
continue;
}
} else
{var vec__27838_27857 = cljs.core.first(seq__27833_27851__$1);var name_27858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_27857,0,null);var value_27859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_27857,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27858,cljs.core.array_seq([value_27859], 0));
{
var G__27860 = cljs.core.next(seq__27833_27851__$1);
var G__27861 = null;
var G__27862 = 0;
var G__27863 = 0;
seq__27833_27839 = G__27860;
chunk__27834_27840 = G__27861;
count__27835_27841 = G__27862;
i__27836_27842 = G__27863;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27868_27872 = cljs.core.seq(domina.nodes(content));var chunk__27869_27873 = null;var count__27870_27874 = 0;var i__27871_27875 = 0;while(true){
if((i__27871_27875 < count__27870_27874))
{var node_27876 = chunk__27869_27873.cljs$core$IIndexed$_nth$arity$2(null,i__27871_27875);goog.dom.classes.add(node_27876,class$);
{
var G__27877 = seq__27868_27872;
var G__27878 = chunk__27869_27873;
var G__27879 = count__27870_27874;
var G__27880 = (i__27871_27875 + 1);
seq__27868_27872 = G__27877;
chunk__27869_27873 = G__27878;
count__27870_27874 = G__27879;
i__27871_27875 = G__27880;
continue;
}
} else
{var temp__4092__auto___27881 = cljs.core.seq(seq__27868_27872);if(temp__4092__auto___27881)
{var seq__27868_27882__$1 = temp__4092__auto___27881;if(cljs.core.chunked_seq_QMARK_(seq__27868_27882__$1))
{var c__4148__auto___27883 = cljs.core.chunk_first(seq__27868_27882__$1);{
var G__27884 = cljs.core.chunk_rest(seq__27868_27882__$1);
var G__27885 = c__4148__auto___27883;
var G__27886 = cljs.core.count(c__4148__auto___27883);
var G__27887 = 0;
seq__27868_27872 = G__27884;
chunk__27869_27873 = G__27885;
count__27870_27874 = G__27886;
i__27871_27875 = G__27887;
continue;
}
} else
{var node_27888 = cljs.core.first(seq__27868_27882__$1);goog.dom.classes.add(node_27888,class$);
{
var G__27889 = cljs.core.next(seq__27868_27882__$1);
var G__27890 = null;
var G__27891 = 0;
var G__27892 = 0;
seq__27868_27872 = G__27889;
chunk__27869_27873 = G__27890;
count__27870_27874 = G__27891;
i__27871_27875 = G__27892;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27897_27901 = cljs.core.seq(domina.nodes(content));var chunk__27898_27902 = null;var count__27899_27903 = 0;var i__27900_27904 = 0;while(true){
if((i__27900_27904 < count__27899_27903))
{var node_27905 = chunk__27898_27902.cljs$core$IIndexed$_nth$arity$2(null,i__27900_27904);goog.dom.classes.remove(node_27905,class$);
{
var G__27906 = seq__27897_27901;
var G__27907 = chunk__27898_27902;
var G__27908 = count__27899_27903;
var G__27909 = (i__27900_27904 + 1);
seq__27897_27901 = G__27906;
chunk__27898_27902 = G__27907;
count__27899_27903 = G__27908;
i__27900_27904 = G__27909;
continue;
}
} else
{var temp__4092__auto___27910 = cljs.core.seq(seq__27897_27901);if(temp__4092__auto___27910)
{var seq__27897_27911__$1 = temp__4092__auto___27910;if(cljs.core.chunked_seq_QMARK_(seq__27897_27911__$1))
{var c__4148__auto___27912 = cljs.core.chunk_first(seq__27897_27911__$1);{
var G__27913 = cljs.core.chunk_rest(seq__27897_27911__$1);
var G__27914 = c__4148__auto___27912;
var G__27915 = cljs.core.count(c__4148__auto___27912);
var G__27916 = 0;
seq__27897_27901 = G__27913;
chunk__27898_27902 = G__27914;
count__27899_27903 = G__27915;
i__27900_27904 = G__27916;
continue;
}
} else
{var node_27917 = cljs.core.first(seq__27897_27911__$1);goog.dom.classes.remove(node_27917,class$);
{
var G__27918 = cljs.core.next(seq__27897_27911__$1);
var G__27919 = null;
var G__27920 = 0;
var G__27921 = 0;
seq__27897_27901 = G__27918;
chunk__27898_27902 = G__27919;
count__27899_27903 = G__27920;
i__27900_27904 = G__27921;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27926_27930 = cljs.core.seq(domina.nodes(content));var chunk__27927_27931 = null;var count__27928_27932 = 0;var i__27929_27933 = 0;while(true){
if((i__27929_27933 < count__27928_27932))
{var node_27934 = chunk__27927_27931.cljs$core$IIndexed$_nth$arity$2(null,i__27929_27933);goog.dom.classes.toggle(node_27934,class$);
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
{var node_27946 = cljs.core.first(seq__27926_27940__$1);goog.dom.classes.toggle(node_27946,class$);
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
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27959__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27955_27960 = cljs.core.seq(domina.nodes(content));var chunk__27956_27961 = null;var count__27957_27962 = 0;var i__27958_27963 = 0;while(true){
if((i__27958_27963 < count__27957_27962))
{var node_27964 = chunk__27956_27961.cljs$core$IIndexed$_nth$arity$2(null,i__27958_27963);goog.dom.classes.set(node_27964,classes_27959__$1);
{
var G__27965 = seq__27955_27960;
var G__27966 = chunk__27956_27961;
var G__27967 = count__27957_27962;
var G__27968 = (i__27958_27963 + 1);
seq__27955_27960 = G__27965;
chunk__27956_27961 = G__27966;
count__27957_27962 = G__27967;
i__27958_27963 = G__27968;
continue;
}
} else
{var temp__4092__auto___27969 = cljs.core.seq(seq__27955_27960);if(temp__4092__auto___27969)
{var seq__27955_27970__$1 = temp__4092__auto___27969;if(cljs.core.chunked_seq_QMARK_(seq__27955_27970__$1))
{var c__4148__auto___27971 = cljs.core.chunk_first(seq__27955_27970__$1);{
var G__27972 = cljs.core.chunk_rest(seq__27955_27970__$1);
var G__27973 = c__4148__auto___27971;
var G__27974 = cljs.core.count(c__4148__auto___27971);
var G__27975 = 0;
seq__27955_27960 = G__27972;
chunk__27956_27961 = G__27973;
count__27957_27962 = G__27974;
i__27958_27963 = G__27975;
continue;
}
} else
{var node_27976 = cljs.core.first(seq__27955_27970__$1);goog.dom.classes.set(node_27976,classes_27959__$1);
{
var G__27977 = cljs.core.next(seq__27955_27970__$1);
var G__27978 = null;
var G__27979 = 0;
var G__27980 = 0;
seq__27955_27960 = G__27977;
chunk__27956_27961 = G__27978;
count__27957_27962 = G__27979;
i__27958_27963 = G__27980;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27985_27989 = cljs.core.seq(domina.nodes(content));var chunk__27986_27990 = null;var count__27987_27991 = 0;var i__27988_27992 = 0;while(true){
if((i__27988_27992 < count__27987_27991))
{var node_27993 = chunk__27986_27990.cljs$core$IIndexed$_nth$arity$2(null,i__27988_27992);goog.dom.setTextContent(node_27993,value);
{
var G__27994 = seq__27985_27989;
var G__27995 = chunk__27986_27990;
var G__27996 = count__27987_27991;
var G__27997 = (i__27988_27992 + 1);
seq__27985_27989 = G__27994;
chunk__27986_27990 = G__27995;
count__27987_27991 = G__27996;
i__27988_27992 = G__27997;
continue;
}
} else
{var temp__4092__auto___27998 = cljs.core.seq(seq__27985_27989);if(temp__4092__auto___27998)
{var seq__27985_27999__$1 = temp__4092__auto___27998;if(cljs.core.chunked_seq_QMARK_(seq__27985_27999__$1))
{var c__4148__auto___28000 = cljs.core.chunk_first(seq__27985_27999__$1);{
var G__28001 = cljs.core.chunk_rest(seq__27985_27999__$1);
var G__28002 = c__4148__auto___28000;
var G__28003 = cljs.core.count(c__4148__auto___28000);
var G__28004 = 0;
seq__27985_27989 = G__28001;
chunk__27986_27990 = G__28002;
count__27987_27991 = G__28003;
i__27988_27992 = G__28004;
continue;
}
} else
{var node_28005 = cljs.core.first(seq__27985_27999__$1);goog.dom.setTextContent(node_28005,value);
{
var G__28006 = cljs.core.next(seq__27985_27999__$1);
var G__28007 = null;
var G__28008 = 0;
var G__28009 = 0;
seq__27985_27989 = G__28006;
chunk__27986_27990 = G__28007;
count__27987_27991 = G__28008;
i__27988_27992 = G__28009;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28014_28018 = cljs.core.seq(domina.nodes(content));var chunk__28015_28019 = null;var count__28016_28020 = 0;var i__28017_28021 = 0;while(true){
if((i__28017_28021 < count__28016_28020))
{var node_28022 = chunk__28015_28019.cljs$core$IIndexed$_nth$arity$2(null,i__28017_28021);goog.dom.forms.setValue(node_28022,value);
{
var G__28023 = seq__28014_28018;
var G__28024 = chunk__28015_28019;
var G__28025 = count__28016_28020;
var G__28026 = (i__28017_28021 + 1);
seq__28014_28018 = G__28023;
chunk__28015_28019 = G__28024;
count__28016_28020 = G__28025;
i__28017_28021 = G__28026;
continue;
}
} else
{var temp__4092__auto___28027 = cljs.core.seq(seq__28014_28018);if(temp__4092__auto___28027)
{var seq__28014_28028__$1 = temp__4092__auto___28027;if(cljs.core.chunked_seq_QMARK_(seq__28014_28028__$1))
{var c__4148__auto___28029 = cljs.core.chunk_first(seq__28014_28028__$1);{
var G__28030 = cljs.core.chunk_rest(seq__28014_28028__$1);
var G__28031 = c__4148__auto___28029;
var G__28032 = cljs.core.count(c__4148__auto___28029);
var G__28033 = 0;
seq__28014_28018 = G__28030;
chunk__28015_28019 = G__28031;
count__28016_28020 = G__28032;
i__28017_28021 = G__28033;
continue;
}
} else
{var node_28034 = cljs.core.first(seq__28014_28028__$1);goog.dom.forms.setValue(node_28034,value);
{
var G__28035 = cljs.core.next(seq__28014_28028__$1);
var G__28036 = null;
var G__28037 = 0;
var G__28038 = 0;
seq__28014_28018 = G__28035;
chunk__28015_28019 = G__28036;
count__28016_28020 = G__28037;
i__28017_28021 = G__28038;
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
{var value_28049 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28045_28050 = cljs.core.seq(domina.nodes(content));var chunk__28046_28051 = null;var count__28047_28052 = 0;var i__28048_28053 = 0;while(true){
if((i__28048_28053 < count__28047_28052))
{var node_28054 = chunk__28046_28051.cljs$core$IIndexed$_nth$arity$2(null,i__28048_28053);node_28054.innerHTML = value_28049;
{
var G__28055 = seq__28045_28050;
var G__28056 = chunk__28046_28051;
var G__28057 = count__28047_28052;
var G__28058 = (i__28048_28053 + 1);
seq__28045_28050 = G__28055;
chunk__28046_28051 = G__28056;
count__28047_28052 = G__28057;
i__28048_28053 = G__28058;
continue;
}
} else
{var temp__4092__auto___28059 = cljs.core.seq(seq__28045_28050);if(temp__4092__auto___28059)
{var seq__28045_28060__$1 = temp__4092__auto___28059;if(cljs.core.chunked_seq_QMARK_(seq__28045_28060__$1))
{var c__4148__auto___28061 = cljs.core.chunk_first(seq__28045_28060__$1);{
var G__28062 = cljs.core.chunk_rest(seq__28045_28060__$1);
var G__28063 = c__4148__auto___28061;
var G__28064 = cljs.core.count(c__4148__auto___28061);
var G__28065 = 0;
seq__28045_28050 = G__28062;
chunk__28046_28051 = G__28063;
count__28047_28052 = G__28064;
i__28048_28053 = G__28065;
continue;
}
} else
{var node_28066 = cljs.core.first(seq__28045_28060__$1);node_28066.innerHTML = value_28049;
{
var G__28067 = cljs.core.next(seq__28045_28060__$1);
var G__28068 = null;
var G__28069 = 0;
var G__28070 = 0;
seq__28045_28050 = G__28067;
chunk__28046_28051 = G__28068;
count__28047_28052 = G__28069;
i__28048_28053 = G__28070;
continue;
}
}
} else
{}
}
break;
}
}catch (e28044){if((e28044 instanceof Error))
{var e_28071 = e28044;domina.replace_children_BANG_(content,value_28049);
} else
{if(cljs.core.constant$keyword$230)
{throw e28044;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28078_28082 = cljs.core.seq(children);var chunk__28079_28083 = null;var count__28080_28084 = 0;var i__28081_28085 = 0;while(true){
if((i__28081_28085 < count__28080_28084))
{var child_28086 = chunk__28079_28083.cljs$core$IIndexed$_nth$arity$2(null,i__28081_28085);frag.appendChild(child_28086);
{
var G__28087 = seq__28078_28082;
var G__28088 = chunk__28079_28083;
var G__28089 = count__28080_28084;
var G__28090 = (i__28081_28085 + 1);
seq__28078_28082 = G__28087;
chunk__28079_28083 = G__28088;
count__28080_28084 = G__28089;
i__28081_28085 = G__28090;
continue;
}
} else
{var temp__4092__auto___28091 = cljs.core.seq(seq__28078_28082);if(temp__4092__auto___28091)
{var seq__28078_28092__$1 = temp__4092__auto___28091;if(cljs.core.chunked_seq_QMARK_(seq__28078_28092__$1))
{var c__4148__auto___28093 = cljs.core.chunk_first(seq__28078_28092__$1);{
var G__28094 = cljs.core.chunk_rest(seq__28078_28092__$1);
var G__28095 = c__4148__auto___28093;
var G__28096 = cljs.core.count(c__4148__auto___28093);
var G__28097 = 0;
seq__28078_28082 = G__28094;
chunk__28079_28083 = G__28095;
count__28080_28084 = G__28096;
i__28081_28085 = G__28097;
continue;
}
} else
{var child_28098 = cljs.core.first(seq__28078_28092__$1);frag.appendChild(child_28098);
{
var G__28099 = cljs.core.next(seq__28078_28092__$1);
var G__28100 = null;
var G__28101 = 0;
var G__28102 = 0;
seq__28078_28082 = G__28099;
chunk__28079_28083 = G__28100;
count__28080_28084 = G__28101;
i__28081_28085 = G__28102;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28072_SHARP_,p2__28073_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28072_SHARP_,p2__28073_SHARP_) : f.call(null,p1__28072_SHARP_,p2__28073_SHARP_));
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
{if((function (){var G__28104 = list_thing;if(G__28104)
{var bit__4050__auto__ = (G__28104.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28104.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28104.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28104);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28104);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$231)
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
{if((function (){var G__28105 = content;if(G__28105)
{var bit__4050__auto__ = (G__28105.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28105.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28105.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28105);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28105);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$231)
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
{if((function (){var G__28106 = content;if(G__28106)
{var bit__4050__auto__ = (G__28106.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28106.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28106.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28106);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28106);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$231)
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
