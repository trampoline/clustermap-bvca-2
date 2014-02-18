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
var opt_wrapper_27691 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27692 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$231,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27692,table_section_wrapper_27692,opt_wrapper_27691,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27693,table_section_wrapper_27692,cell_wrapper_27693,opt_wrapper_27691,table_section_wrapper_27692,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27692]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27698 = cljs.core.seq(tbody);var chunk__27699 = null;var count__27700 = 0;var i__27701 = 0;while(true){
if((i__27701 < count__27700))
{var child = chunk__27699.cljs$core$IIndexed$_nth$arity$2(null,i__27701);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27702 = seq__27698;
var G__27703 = chunk__27699;
var G__27704 = count__27700;
var G__27705 = (i__27701 + 1);
seq__27698 = G__27702;
chunk__27699 = G__27703;
count__27700 = G__27704;
i__27701 = G__27705;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27698);if(temp__4092__auto__)
{var seq__27698__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27698__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27698__$1);{
var G__27706 = cljs.core.chunk_rest(seq__27698__$1);
var G__27707 = c__4148__auto__;
var G__27708 = cljs.core.count(c__4148__auto__);
var G__27709 = 0;
seq__27698 = G__27706;
chunk__27699 = G__27707;
count__27700 = G__27708;
i__27701 = G__27709;
continue;
}
} else
{var child = cljs.core.first(seq__27698__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27710 = cljs.core.next(seq__27698__$1);
var G__27711 = null;
var G__27712 = 0;
var G__27713 = 0;
seq__27698 = G__27710;
chunk__27699 = G__27711;
count__27700 = G__27712;
i__27701 = G__27713;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27715 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27715,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27716 = wrapper.lastChild;
var G__27717 = (level - 1);
wrapper = G__27716;
level = G__27717;
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
domina.DomContent = (function (){var obj27719 = {};return obj27719;
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
log_debug.cljs$lang$applyTo = (function (arglist__27720){
var mesg = cljs.core.seq(arglist__27720);
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
log.cljs$lang$applyTo = (function (arglist__27721){
var mesg = cljs.core.seq(arglist__27721);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27722){
var contents = cljs.core.seq(arglist__27722);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27723_SHARP_){return p1__27723_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27724_SHARP_,p2__27725_SHARP_){return goog.dom.insertChildAt(p1__27724_SHARP_,p2__27725_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27724_SHARP_,p2__27725_SHARP_){return goog.dom.insertChildAt(p1__27724_SHARP_,p2__27725_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27727_SHARP_,p2__27726_SHARP_){return goog.dom.insertSiblingBefore(p2__27726_SHARP_,p1__27727_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27727_SHARP_,p2__27726_SHARP_){return goog.dom.insertSiblingBefore(p2__27726_SHARP_,p1__27727_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27729_SHARP_,p2__27728_SHARP_){return goog.dom.insertSiblingAfter(p2__27728_SHARP_,p1__27729_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27729_SHARP_,p2__27728_SHARP_){return goog.dom.insertSiblingAfter(p2__27728_SHARP_,p1__27729_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27731_SHARP_,p2__27730_SHARP_){return goog.dom.replaceNode(p2__27730_SHARP_,p1__27731_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27731_SHARP_,p2__27730_SHARP_){return goog.dom.replaceNode(p2__27730_SHARP_,p1__27731_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27736_27740 = cljs.core.seq(domina.nodes(content));var chunk__27737_27741 = null;var count__27738_27742 = 0;var i__27739_27743 = 0;while(true){
if((i__27739_27743 < count__27738_27742))
{var n_27744 = chunk__27737_27741.cljs$core$IIndexed$_nth$arity$2(null,i__27739_27743);goog.style.setStyle(n_27744,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27745 = seq__27736_27740;
var G__27746 = chunk__27737_27741;
var G__27747 = count__27738_27742;
var G__27748 = (i__27739_27743 + 1);
seq__27736_27740 = G__27745;
chunk__27737_27741 = G__27746;
count__27738_27742 = G__27747;
i__27739_27743 = G__27748;
continue;
}
} else
{var temp__4092__auto___27749 = cljs.core.seq(seq__27736_27740);if(temp__4092__auto___27749)
{var seq__27736_27750__$1 = temp__4092__auto___27749;if(cljs.core.chunked_seq_QMARK_(seq__27736_27750__$1))
{var c__4148__auto___27751 = cljs.core.chunk_first(seq__27736_27750__$1);{
var G__27752 = cljs.core.chunk_rest(seq__27736_27750__$1);
var G__27753 = c__4148__auto___27751;
var G__27754 = cljs.core.count(c__4148__auto___27751);
var G__27755 = 0;
seq__27736_27740 = G__27752;
chunk__27737_27741 = G__27753;
count__27738_27742 = G__27754;
i__27739_27743 = G__27755;
continue;
}
} else
{var n_27756 = cljs.core.first(seq__27736_27750__$1);goog.style.setStyle(n_27756,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27757 = cljs.core.next(seq__27736_27750__$1);
var G__27758 = null;
var G__27759 = 0;
var G__27760 = 0;
seq__27736_27740 = G__27757;
chunk__27737_27741 = G__27758;
count__27738_27742 = G__27759;
i__27739_27743 = G__27760;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27761){
var content = cljs.core.first(arglist__27761);
arglist__27761 = cljs.core.next(arglist__27761);
var name = cljs.core.first(arglist__27761);
var value = cljs.core.rest(arglist__27761);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27766_27770 = cljs.core.seq(domina.nodes(content));var chunk__27767_27771 = null;var count__27768_27772 = 0;var i__27769_27773 = 0;while(true){
if((i__27769_27773 < count__27768_27772))
{var n_27774 = chunk__27767_27771.cljs$core$IIndexed$_nth$arity$2(null,i__27769_27773);n_27774.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27775 = seq__27766_27770;
var G__27776 = chunk__27767_27771;
var G__27777 = count__27768_27772;
var G__27778 = (i__27769_27773 + 1);
seq__27766_27770 = G__27775;
chunk__27767_27771 = G__27776;
count__27768_27772 = G__27777;
i__27769_27773 = G__27778;
continue;
}
} else
{var temp__4092__auto___27779 = cljs.core.seq(seq__27766_27770);if(temp__4092__auto___27779)
{var seq__27766_27780__$1 = temp__4092__auto___27779;if(cljs.core.chunked_seq_QMARK_(seq__27766_27780__$1))
{var c__4148__auto___27781 = cljs.core.chunk_first(seq__27766_27780__$1);{
var G__27782 = cljs.core.chunk_rest(seq__27766_27780__$1);
var G__27783 = c__4148__auto___27781;
var G__27784 = cljs.core.count(c__4148__auto___27781);
var G__27785 = 0;
seq__27766_27770 = G__27782;
chunk__27767_27771 = G__27783;
count__27768_27772 = G__27784;
i__27769_27773 = G__27785;
continue;
}
} else
{var n_27786 = cljs.core.first(seq__27766_27780__$1);n_27786.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27787 = cljs.core.next(seq__27766_27780__$1);
var G__27788 = null;
var G__27789 = 0;
var G__27790 = 0;
seq__27766_27770 = G__27787;
chunk__27767_27771 = G__27788;
count__27768_27772 = G__27789;
i__27769_27773 = G__27790;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27791){
var content = cljs.core.first(arglist__27791);
arglist__27791 = cljs.core.next(arglist__27791);
var name = cljs.core.first(arglist__27791);
var value = cljs.core.rest(arglist__27791);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27796_27800 = cljs.core.seq(domina.nodes(content));var chunk__27797_27801 = null;var count__27798_27802 = 0;var i__27799_27803 = 0;while(true){
if((i__27799_27803 < count__27798_27802))
{var n_27804 = chunk__27797_27801.cljs$core$IIndexed$_nth$arity$2(null,i__27799_27803);n_27804.removeAttribute(cljs.core.name(name));
{
var G__27805 = seq__27796_27800;
var G__27806 = chunk__27797_27801;
var G__27807 = count__27798_27802;
var G__27808 = (i__27799_27803 + 1);
seq__27796_27800 = G__27805;
chunk__27797_27801 = G__27806;
count__27798_27802 = G__27807;
i__27799_27803 = G__27808;
continue;
}
} else
{var temp__4092__auto___27809 = cljs.core.seq(seq__27796_27800);if(temp__4092__auto___27809)
{var seq__27796_27810__$1 = temp__4092__auto___27809;if(cljs.core.chunked_seq_QMARK_(seq__27796_27810__$1))
{var c__4148__auto___27811 = cljs.core.chunk_first(seq__27796_27810__$1);{
var G__27812 = cljs.core.chunk_rest(seq__27796_27810__$1);
var G__27813 = c__4148__auto___27811;
var G__27814 = cljs.core.count(c__4148__auto___27811);
var G__27815 = 0;
seq__27796_27800 = G__27812;
chunk__27797_27801 = G__27813;
count__27798_27802 = G__27814;
i__27799_27803 = G__27815;
continue;
}
} else
{var n_27816 = cljs.core.first(seq__27796_27810__$1);n_27816.removeAttribute(cljs.core.name(name));
{
var G__27817 = cljs.core.next(seq__27796_27810__$1);
var G__27818 = null;
var G__27819 = 0;
var G__27820 = 0;
seq__27796_27800 = G__27817;
chunk__27797_27801 = G__27818;
count__27798_27802 = G__27819;
i__27799_27803 = G__27820;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27822 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27822,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27823_SHARP_){var attr = attrs__$1.item(p1__27823_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27830_27836 = cljs.core.seq(styles);var chunk__27831_27837 = null;var count__27832_27838 = 0;var i__27833_27839 = 0;while(true){
if((i__27833_27839 < count__27832_27838))
{var vec__27834_27840 = chunk__27831_27837.cljs$core$IIndexed$_nth$arity$2(null,i__27833_27839);var name_27841 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834_27840,0,null);var value_27842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27834_27840,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27841,cljs.core.array_seq([value_27842], 0));
{
var G__27843 = seq__27830_27836;
var G__27844 = chunk__27831_27837;
var G__27845 = count__27832_27838;
var G__27846 = (i__27833_27839 + 1);
seq__27830_27836 = G__27843;
chunk__27831_27837 = G__27844;
count__27832_27838 = G__27845;
i__27833_27839 = G__27846;
continue;
}
} else
{var temp__4092__auto___27847 = cljs.core.seq(seq__27830_27836);if(temp__4092__auto___27847)
{var seq__27830_27848__$1 = temp__4092__auto___27847;if(cljs.core.chunked_seq_QMARK_(seq__27830_27848__$1))
{var c__4148__auto___27849 = cljs.core.chunk_first(seq__27830_27848__$1);{
var G__27850 = cljs.core.chunk_rest(seq__27830_27848__$1);
var G__27851 = c__4148__auto___27849;
var G__27852 = cljs.core.count(c__4148__auto___27849);
var G__27853 = 0;
seq__27830_27836 = G__27850;
chunk__27831_27837 = G__27851;
count__27832_27838 = G__27852;
i__27833_27839 = G__27853;
continue;
}
} else
{var vec__27835_27854 = cljs.core.first(seq__27830_27848__$1);var name_27855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835_27854,0,null);var value_27856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27835_27854,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27855,cljs.core.array_seq([value_27856], 0));
{
var G__27857 = cljs.core.next(seq__27830_27848__$1);
var G__27858 = null;
var G__27859 = 0;
var G__27860 = 0;
seq__27830_27836 = G__27857;
chunk__27831_27837 = G__27858;
count__27832_27838 = G__27859;
i__27833_27839 = G__27860;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27867_27873 = cljs.core.seq(attrs);var chunk__27868_27874 = null;var count__27869_27875 = 0;var i__27870_27876 = 0;while(true){
if((i__27870_27876 < count__27869_27875))
{var vec__27871_27877 = chunk__27868_27874.cljs$core$IIndexed$_nth$arity$2(null,i__27870_27876);var name_27878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871_27877,0,null);var value_27879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27871_27877,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27878,cljs.core.array_seq([value_27879], 0));
{
var G__27880 = seq__27867_27873;
var G__27881 = chunk__27868_27874;
var G__27882 = count__27869_27875;
var G__27883 = (i__27870_27876 + 1);
seq__27867_27873 = G__27880;
chunk__27868_27874 = G__27881;
count__27869_27875 = G__27882;
i__27870_27876 = G__27883;
continue;
}
} else
{var temp__4092__auto___27884 = cljs.core.seq(seq__27867_27873);if(temp__4092__auto___27884)
{var seq__27867_27885__$1 = temp__4092__auto___27884;if(cljs.core.chunked_seq_QMARK_(seq__27867_27885__$1))
{var c__4148__auto___27886 = cljs.core.chunk_first(seq__27867_27885__$1);{
var G__27887 = cljs.core.chunk_rest(seq__27867_27885__$1);
var G__27888 = c__4148__auto___27886;
var G__27889 = cljs.core.count(c__4148__auto___27886);
var G__27890 = 0;
seq__27867_27873 = G__27887;
chunk__27868_27874 = G__27888;
count__27869_27875 = G__27889;
i__27870_27876 = G__27890;
continue;
}
} else
{var vec__27872_27891 = cljs.core.first(seq__27867_27885__$1);var name_27892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27872_27891,0,null);var value_27893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27872_27891,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27892,cljs.core.array_seq([value_27893], 0));
{
var G__27894 = cljs.core.next(seq__27867_27885__$1);
var G__27895 = null;
var G__27896 = 0;
var G__27897 = 0;
seq__27867_27873 = G__27894;
chunk__27868_27874 = G__27895;
count__27869_27875 = G__27896;
i__27870_27876 = G__27897;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27902_27906 = cljs.core.seq(domina.nodes(content));var chunk__27903_27907 = null;var count__27904_27908 = 0;var i__27905_27909 = 0;while(true){
if((i__27905_27909 < count__27904_27908))
{var node_27910 = chunk__27903_27907.cljs$core$IIndexed$_nth$arity$2(null,i__27905_27909);goog.dom.classes.add(node_27910,class$);
{
var G__27911 = seq__27902_27906;
var G__27912 = chunk__27903_27907;
var G__27913 = count__27904_27908;
var G__27914 = (i__27905_27909 + 1);
seq__27902_27906 = G__27911;
chunk__27903_27907 = G__27912;
count__27904_27908 = G__27913;
i__27905_27909 = G__27914;
continue;
}
} else
{var temp__4092__auto___27915 = cljs.core.seq(seq__27902_27906);if(temp__4092__auto___27915)
{var seq__27902_27916__$1 = temp__4092__auto___27915;if(cljs.core.chunked_seq_QMARK_(seq__27902_27916__$1))
{var c__4148__auto___27917 = cljs.core.chunk_first(seq__27902_27916__$1);{
var G__27918 = cljs.core.chunk_rest(seq__27902_27916__$1);
var G__27919 = c__4148__auto___27917;
var G__27920 = cljs.core.count(c__4148__auto___27917);
var G__27921 = 0;
seq__27902_27906 = G__27918;
chunk__27903_27907 = G__27919;
count__27904_27908 = G__27920;
i__27905_27909 = G__27921;
continue;
}
} else
{var node_27922 = cljs.core.first(seq__27902_27916__$1);goog.dom.classes.add(node_27922,class$);
{
var G__27923 = cljs.core.next(seq__27902_27916__$1);
var G__27924 = null;
var G__27925 = 0;
var G__27926 = 0;
seq__27902_27906 = G__27923;
chunk__27903_27907 = G__27924;
count__27904_27908 = G__27925;
i__27905_27909 = G__27926;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27931_27935 = cljs.core.seq(domina.nodes(content));var chunk__27932_27936 = null;var count__27933_27937 = 0;var i__27934_27938 = 0;while(true){
if((i__27934_27938 < count__27933_27937))
{var node_27939 = chunk__27932_27936.cljs$core$IIndexed$_nth$arity$2(null,i__27934_27938);goog.dom.classes.remove(node_27939,class$);
{
var G__27940 = seq__27931_27935;
var G__27941 = chunk__27932_27936;
var G__27942 = count__27933_27937;
var G__27943 = (i__27934_27938 + 1);
seq__27931_27935 = G__27940;
chunk__27932_27936 = G__27941;
count__27933_27937 = G__27942;
i__27934_27938 = G__27943;
continue;
}
} else
{var temp__4092__auto___27944 = cljs.core.seq(seq__27931_27935);if(temp__4092__auto___27944)
{var seq__27931_27945__$1 = temp__4092__auto___27944;if(cljs.core.chunked_seq_QMARK_(seq__27931_27945__$1))
{var c__4148__auto___27946 = cljs.core.chunk_first(seq__27931_27945__$1);{
var G__27947 = cljs.core.chunk_rest(seq__27931_27945__$1);
var G__27948 = c__4148__auto___27946;
var G__27949 = cljs.core.count(c__4148__auto___27946);
var G__27950 = 0;
seq__27931_27935 = G__27947;
chunk__27932_27936 = G__27948;
count__27933_27937 = G__27949;
i__27934_27938 = G__27950;
continue;
}
} else
{var node_27951 = cljs.core.first(seq__27931_27945__$1);goog.dom.classes.remove(node_27951,class$);
{
var G__27952 = cljs.core.next(seq__27931_27945__$1);
var G__27953 = null;
var G__27954 = 0;
var G__27955 = 0;
seq__27931_27935 = G__27952;
chunk__27932_27936 = G__27953;
count__27933_27937 = G__27954;
i__27934_27938 = G__27955;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27960_27964 = cljs.core.seq(domina.nodes(content));var chunk__27961_27965 = null;var count__27962_27966 = 0;var i__27963_27967 = 0;while(true){
if((i__27963_27967 < count__27962_27966))
{var node_27968 = chunk__27961_27965.cljs$core$IIndexed$_nth$arity$2(null,i__27963_27967);goog.dom.classes.toggle(node_27968,class$);
{
var G__27969 = seq__27960_27964;
var G__27970 = chunk__27961_27965;
var G__27971 = count__27962_27966;
var G__27972 = (i__27963_27967 + 1);
seq__27960_27964 = G__27969;
chunk__27961_27965 = G__27970;
count__27962_27966 = G__27971;
i__27963_27967 = G__27972;
continue;
}
} else
{var temp__4092__auto___27973 = cljs.core.seq(seq__27960_27964);if(temp__4092__auto___27973)
{var seq__27960_27974__$1 = temp__4092__auto___27973;if(cljs.core.chunked_seq_QMARK_(seq__27960_27974__$1))
{var c__4148__auto___27975 = cljs.core.chunk_first(seq__27960_27974__$1);{
var G__27976 = cljs.core.chunk_rest(seq__27960_27974__$1);
var G__27977 = c__4148__auto___27975;
var G__27978 = cljs.core.count(c__4148__auto___27975);
var G__27979 = 0;
seq__27960_27964 = G__27976;
chunk__27961_27965 = G__27977;
count__27962_27966 = G__27978;
i__27963_27967 = G__27979;
continue;
}
} else
{var node_27980 = cljs.core.first(seq__27960_27974__$1);goog.dom.classes.toggle(node_27980,class$);
{
var G__27981 = cljs.core.next(seq__27960_27974__$1);
var G__27982 = null;
var G__27983 = 0;
var G__27984 = 0;
seq__27960_27964 = G__27981;
chunk__27961_27965 = G__27982;
count__27962_27966 = G__27983;
i__27963_27967 = G__27984;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27993__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27989_27994 = cljs.core.seq(domina.nodes(content));var chunk__27990_27995 = null;var count__27991_27996 = 0;var i__27992_27997 = 0;while(true){
if((i__27992_27997 < count__27991_27996))
{var node_27998 = chunk__27990_27995.cljs$core$IIndexed$_nth$arity$2(null,i__27992_27997);goog.dom.classes.set(node_27998,classes_27993__$1);
{
var G__27999 = seq__27989_27994;
var G__28000 = chunk__27990_27995;
var G__28001 = count__27991_27996;
var G__28002 = (i__27992_27997 + 1);
seq__27989_27994 = G__27999;
chunk__27990_27995 = G__28000;
count__27991_27996 = G__28001;
i__27992_27997 = G__28002;
continue;
}
} else
{var temp__4092__auto___28003 = cljs.core.seq(seq__27989_27994);if(temp__4092__auto___28003)
{var seq__27989_28004__$1 = temp__4092__auto___28003;if(cljs.core.chunked_seq_QMARK_(seq__27989_28004__$1))
{var c__4148__auto___28005 = cljs.core.chunk_first(seq__27989_28004__$1);{
var G__28006 = cljs.core.chunk_rest(seq__27989_28004__$1);
var G__28007 = c__4148__auto___28005;
var G__28008 = cljs.core.count(c__4148__auto___28005);
var G__28009 = 0;
seq__27989_27994 = G__28006;
chunk__27990_27995 = G__28007;
count__27991_27996 = G__28008;
i__27992_27997 = G__28009;
continue;
}
} else
{var node_28010 = cljs.core.first(seq__27989_28004__$1);goog.dom.classes.set(node_28010,classes_27993__$1);
{
var G__28011 = cljs.core.next(seq__27989_28004__$1);
var G__28012 = null;
var G__28013 = 0;
var G__28014 = 0;
seq__27989_27994 = G__28011;
chunk__27990_27995 = G__28012;
count__27991_27996 = G__28013;
i__27992_27997 = G__28014;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28019_28023 = cljs.core.seq(domina.nodes(content));var chunk__28020_28024 = null;var count__28021_28025 = 0;var i__28022_28026 = 0;while(true){
if((i__28022_28026 < count__28021_28025))
{var node_28027 = chunk__28020_28024.cljs$core$IIndexed$_nth$arity$2(null,i__28022_28026);goog.dom.setTextContent(node_28027,value);
{
var G__28028 = seq__28019_28023;
var G__28029 = chunk__28020_28024;
var G__28030 = count__28021_28025;
var G__28031 = (i__28022_28026 + 1);
seq__28019_28023 = G__28028;
chunk__28020_28024 = G__28029;
count__28021_28025 = G__28030;
i__28022_28026 = G__28031;
continue;
}
} else
{var temp__4092__auto___28032 = cljs.core.seq(seq__28019_28023);if(temp__4092__auto___28032)
{var seq__28019_28033__$1 = temp__4092__auto___28032;if(cljs.core.chunked_seq_QMARK_(seq__28019_28033__$1))
{var c__4148__auto___28034 = cljs.core.chunk_first(seq__28019_28033__$1);{
var G__28035 = cljs.core.chunk_rest(seq__28019_28033__$1);
var G__28036 = c__4148__auto___28034;
var G__28037 = cljs.core.count(c__4148__auto___28034);
var G__28038 = 0;
seq__28019_28023 = G__28035;
chunk__28020_28024 = G__28036;
count__28021_28025 = G__28037;
i__28022_28026 = G__28038;
continue;
}
} else
{var node_28039 = cljs.core.first(seq__28019_28033__$1);goog.dom.setTextContent(node_28039,value);
{
var G__28040 = cljs.core.next(seq__28019_28033__$1);
var G__28041 = null;
var G__28042 = 0;
var G__28043 = 0;
seq__28019_28023 = G__28040;
chunk__28020_28024 = G__28041;
count__28021_28025 = G__28042;
i__28022_28026 = G__28043;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28048_28052 = cljs.core.seq(domina.nodes(content));var chunk__28049_28053 = null;var count__28050_28054 = 0;var i__28051_28055 = 0;while(true){
if((i__28051_28055 < count__28050_28054))
{var node_28056 = chunk__28049_28053.cljs$core$IIndexed$_nth$arity$2(null,i__28051_28055);goog.dom.forms.setValue(node_28056,value);
{
var G__28057 = seq__28048_28052;
var G__28058 = chunk__28049_28053;
var G__28059 = count__28050_28054;
var G__28060 = (i__28051_28055 + 1);
seq__28048_28052 = G__28057;
chunk__28049_28053 = G__28058;
count__28050_28054 = G__28059;
i__28051_28055 = G__28060;
continue;
}
} else
{var temp__4092__auto___28061 = cljs.core.seq(seq__28048_28052);if(temp__4092__auto___28061)
{var seq__28048_28062__$1 = temp__4092__auto___28061;if(cljs.core.chunked_seq_QMARK_(seq__28048_28062__$1))
{var c__4148__auto___28063 = cljs.core.chunk_first(seq__28048_28062__$1);{
var G__28064 = cljs.core.chunk_rest(seq__28048_28062__$1);
var G__28065 = c__4148__auto___28063;
var G__28066 = cljs.core.count(c__4148__auto___28063);
var G__28067 = 0;
seq__28048_28052 = G__28064;
chunk__28049_28053 = G__28065;
count__28050_28054 = G__28066;
i__28051_28055 = G__28067;
continue;
}
} else
{var node_28068 = cljs.core.first(seq__28048_28062__$1);goog.dom.forms.setValue(node_28068,value);
{
var G__28069 = cljs.core.next(seq__28048_28062__$1);
var G__28070 = null;
var G__28071 = 0;
var G__28072 = 0;
seq__28048_28052 = G__28069;
chunk__28049_28053 = G__28070;
count__28050_28054 = G__28071;
i__28051_28055 = G__28072;
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
{var value_28083 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28079_28084 = cljs.core.seq(domina.nodes(content));var chunk__28080_28085 = null;var count__28081_28086 = 0;var i__28082_28087 = 0;while(true){
if((i__28082_28087 < count__28081_28086))
{var node_28088 = chunk__28080_28085.cljs$core$IIndexed$_nth$arity$2(null,i__28082_28087);node_28088.innerHTML = value_28083;
{
var G__28089 = seq__28079_28084;
var G__28090 = chunk__28080_28085;
var G__28091 = count__28081_28086;
var G__28092 = (i__28082_28087 + 1);
seq__28079_28084 = G__28089;
chunk__28080_28085 = G__28090;
count__28081_28086 = G__28091;
i__28082_28087 = G__28092;
continue;
}
} else
{var temp__4092__auto___28093 = cljs.core.seq(seq__28079_28084);if(temp__4092__auto___28093)
{var seq__28079_28094__$1 = temp__4092__auto___28093;if(cljs.core.chunked_seq_QMARK_(seq__28079_28094__$1))
{var c__4148__auto___28095 = cljs.core.chunk_first(seq__28079_28094__$1);{
var G__28096 = cljs.core.chunk_rest(seq__28079_28094__$1);
var G__28097 = c__4148__auto___28095;
var G__28098 = cljs.core.count(c__4148__auto___28095);
var G__28099 = 0;
seq__28079_28084 = G__28096;
chunk__28080_28085 = G__28097;
count__28081_28086 = G__28098;
i__28082_28087 = G__28099;
continue;
}
} else
{var node_28100 = cljs.core.first(seq__28079_28094__$1);node_28100.innerHTML = value_28083;
{
var G__28101 = cljs.core.next(seq__28079_28094__$1);
var G__28102 = null;
var G__28103 = 0;
var G__28104 = 0;
seq__28079_28084 = G__28101;
chunk__28080_28085 = G__28102;
count__28081_28086 = G__28103;
i__28082_28087 = G__28104;
continue;
}
}
} else
{}
}
break;
}
}catch (e28078){if((e28078 instanceof Error))
{var e_28105 = e28078;domina.replace_children_BANG_(content,value_28083);
} else
{if(cljs.core.constant$keyword$230)
{throw e28078;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28112_28116 = cljs.core.seq(children);var chunk__28113_28117 = null;var count__28114_28118 = 0;var i__28115_28119 = 0;while(true){
if((i__28115_28119 < count__28114_28118))
{var child_28120 = chunk__28113_28117.cljs$core$IIndexed$_nth$arity$2(null,i__28115_28119);frag.appendChild(child_28120);
{
var G__28121 = seq__28112_28116;
var G__28122 = chunk__28113_28117;
var G__28123 = count__28114_28118;
var G__28124 = (i__28115_28119 + 1);
seq__28112_28116 = G__28121;
chunk__28113_28117 = G__28122;
count__28114_28118 = G__28123;
i__28115_28119 = G__28124;
continue;
}
} else
{var temp__4092__auto___28125 = cljs.core.seq(seq__28112_28116);if(temp__4092__auto___28125)
{var seq__28112_28126__$1 = temp__4092__auto___28125;if(cljs.core.chunked_seq_QMARK_(seq__28112_28126__$1))
{var c__4148__auto___28127 = cljs.core.chunk_first(seq__28112_28126__$1);{
var G__28128 = cljs.core.chunk_rest(seq__28112_28126__$1);
var G__28129 = c__4148__auto___28127;
var G__28130 = cljs.core.count(c__4148__auto___28127);
var G__28131 = 0;
seq__28112_28116 = G__28128;
chunk__28113_28117 = G__28129;
count__28114_28118 = G__28130;
i__28115_28119 = G__28131;
continue;
}
} else
{var child_28132 = cljs.core.first(seq__28112_28126__$1);frag.appendChild(child_28132);
{
var G__28133 = cljs.core.next(seq__28112_28126__$1);
var G__28134 = null;
var G__28135 = 0;
var G__28136 = 0;
seq__28112_28116 = G__28133;
chunk__28113_28117 = G__28134;
count__28114_28118 = G__28135;
i__28115_28119 = G__28136;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28106_SHARP_,p2__28107_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28106_SHARP_,p2__28107_SHARP_) : f.call(null,p1__28106_SHARP_,p2__28107_SHARP_));
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
{if((function (){var G__28138 = list_thing;if(G__28138)
{var bit__4050__auto__ = (G__28138.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28138.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28138.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28138);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28138);
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
{if((function (){var G__28139 = content;if(G__28139)
{var bit__4050__auto__ = (G__28139.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28139.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28139.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28139);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28139);
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
{if((function (){var G__28140 = content;if(G__28140)
{var bit__4050__auto__ = (G__28140.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28140.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28140.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28140);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28140);
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
