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
var opt_wrapper_27695 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27696 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27697 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$231,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27696,table_section_wrapper_27696,opt_wrapper_27695,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27697,table_section_wrapper_27696,cell_wrapper_27697,opt_wrapper_27695,table_section_wrapper_27696,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27696]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27702 = cljs.core.seq(tbody);var chunk__27703 = null;var count__27704 = 0;var i__27705 = 0;while(true){
if((i__27705 < count__27704))
{var child = chunk__27703.cljs$core$IIndexed$_nth$arity$2(null,i__27705);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27706 = seq__27702;
var G__27707 = chunk__27703;
var G__27708 = count__27704;
var G__27709 = (i__27705 + 1);
seq__27702 = G__27706;
chunk__27703 = G__27707;
count__27704 = G__27708;
i__27705 = G__27709;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27702);if(temp__4092__auto__)
{var seq__27702__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27702__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27702__$1);{
var G__27710 = cljs.core.chunk_rest(seq__27702__$1);
var G__27711 = c__4148__auto__;
var G__27712 = cljs.core.count(c__4148__auto__);
var G__27713 = 0;
seq__27702 = G__27710;
chunk__27703 = G__27711;
count__27704 = G__27712;
i__27705 = G__27713;
continue;
}
} else
{var child = cljs.core.first(seq__27702__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27714 = cljs.core.next(seq__27702__$1);
var G__27715 = null;
var G__27716 = 0;
var G__27717 = 0;
seq__27702 = G__27714;
chunk__27703 = G__27715;
count__27704 = G__27716;
i__27705 = G__27717;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27719 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27719,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27719,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27719,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27720 = wrapper.lastChild;
var G__27721 = (level - 1);
wrapper = G__27720;
level = G__27721;
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
domina.DomContent = (function (){var obj27723 = {};return obj27723;
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
log_debug.cljs$lang$applyTo = (function (arglist__27724){
var mesg = cljs.core.seq(arglist__27724);
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
log.cljs$lang$applyTo = (function (arglist__27725){
var mesg = cljs.core.seq(arglist__27725);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27726){
var contents = cljs.core.seq(arglist__27726);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27727_SHARP_){return p1__27727_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27728_SHARP_,p2__27729_SHARP_){return goog.dom.insertChildAt(p1__27728_SHARP_,p2__27729_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27728_SHARP_,p2__27729_SHARP_){return goog.dom.insertChildAt(p1__27728_SHARP_,p2__27729_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27731_SHARP_,p2__27730_SHARP_){return goog.dom.insertSiblingBefore(p2__27730_SHARP_,p1__27731_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27731_SHARP_,p2__27730_SHARP_){return goog.dom.insertSiblingBefore(p2__27730_SHARP_,p1__27731_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27733_SHARP_,p2__27732_SHARP_){return goog.dom.insertSiblingAfter(p2__27732_SHARP_,p1__27733_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27733_SHARP_,p2__27732_SHARP_){return goog.dom.insertSiblingAfter(p2__27732_SHARP_,p1__27733_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27735_SHARP_,p2__27734_SHARP_){return goog.dom.replaceNode(p2__27734_SHARP_,p1__27735_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27735_SHARP_,p2__27734_SHARP_){return goog.dom.replaceNode(p2__27734_SHARP_,p1__27735_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27740_27744 = cljs.core.seq(domina.nodes(content));var chunk__27741_27745 = null;var count__27742_27746 = 0;var i__27743_27747 = 0;while(true){
if((i__27743_27747 < count__27742_27746))
{var n_27748 = chunk__27741_27745.cljs$core$IIndexed$_nth$arity$2(null,i__27743_27747);goog.style.setStyle(n_27748,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27749 = seq__27740_27744;
var G__27750 = chunk__27741_27745;
var G__27751 = count__27742_27746;
var G__27752 = (i__27743_27747 + 1);
seq__27740_27744 = G__27749;
chunk__27741_27745 = G__27750;
count__27742_27746 = G__27751;
i__27743_27747 = G__27752;
continue;
}
} else
{var temp__4092__auto___27753 = cljs.core.seq(seq__27740_27744);if(temp__4092__auto___27753)
{var seq__27740_27754__$1 = temp__4092__auto___27753;if(cljs.core.chunked_seq_QMARK_(seq__27740_27754__$1))
{var c__4148__auto___27755 = cljs.core.chunk_first(seq__27740_27754__$1);{
var G__27756 = cljs.core.chunk_rest(seq__27740_27754__$1);
var G__27757 = c__4148__auto___27755;
var G__27758 = cljs.core.count(c__4148__auto___27755);
var G__27759 = 0;
seq__27740_27744 = G__27756;
chunk__27741_27745 = G__27757;
count__27742_27746 = G__27758;
i__27743_27747 = G__27759;
continue;
}
} else
{var n_27760 = cljs.core.first(seq__27740_27754__$1);goog.style.setStyle(n_27760,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27761 = cljs.core.next(seq__27740_27754__$1);
var G__27762 = null;
var G__27763 = 0;
var G__27764 = 0;
seq__27740_27744 = G__27761;
chunk__27741_27745 = G__27762;
count__27742_27746 = G__27763;
i__27743_27747 = G__27764;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27765){
var content = cljs.core.first(arglist__27765);
arglist__27765 = cljs.core.next(arglist__27765);
var name = cljs.core.first(arglist__27765);
var value = cljs.core.rest(arglist__27765);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27770_27774 = cljs.core.seq(domina.nodes(content));var chunk__27771_27775 = null;var count__27772_27776 = 0;var i__27773_27777 = 0;while(true){
if((i__27773_27777 < count__27772_27776))
{var n_27778 = chunk__27771_27775.cljs$core$IIndexed$_nth$arity$2(null,i__27773_27777);n_27778.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27779 = seq__27770_27774;
var G__27780 = chunk__27771_27775;
var G__27781 = count__27772_27776;
var G__27782 = (i__27773_27777 + 1);
seq__27770_27774 = G__27779;
chunk__27771_27775 = G__27780;
count__27772_27776 = G__27781;
i__27773_27777 = G__27782;
continue;
}
} else
{var temp__4092__auto___27783 = cljs.core.seq(seq__27770_27774);if(temp__4092__auto___27783)
{var seq__27770_27784__$1 = temp__4092__auto___27783;if(cljs.core.chunked_seq_QMARK_(seq__27770_27784__$1))
{var c__4148__auto___27785 = cljs.core.chunk_first(seq__27770_27784__$1);{
var G__27786 = cljs.core.chunk_rest(seq__27770_27784__$1);
var G__27787 = c__4148__auto___27785;
var G__27788 = cljs.core.count(c__4148__auto___27785);
var G__27789 = 0;
seq__27770_27774 = G__27786;
chunk__27771_27775 = G__27787;
count__27772_27776 = G__27788;
i__27773_27777 = G__27789;
continue;
}
} else
{var n_27790 = cljs.core.first(seq__27770_27784__$1);n_27790.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__27791 = cljs.core.next(seq__27770_27784__$1);
var G__27792 = null;
var G__27793 = 0;
var G__27794 = 0;
seq__27770_27774 = G__27791;
chunk__27771_27775 = G__27792;
count__27772_27776 = G__27793;
i__27773_27777 = G__27794;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27795){
var content = cljs.core.first(arglist__27795);
arglist__27795 = cljs.core.next(arglist__27795);
var name = cljs.core.first(arglist__27795);
var value = cljs.core.rest(arglist__27795);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27800_27804 = cljs.core.seq(domina.nodes(content));var chunk__27801_27805 = null;var count__27802_27806 = 0;var i__27803_27807 = 0;while(true){
if((i__27803_27807 < count__27802_27806))
{var n_27808 = chunk__27801_27805.cljs$core$IIndexed$_nth$arity$2(null,i__27803_27807);n_27808.removeAttribute(cljs.core.name(name));
{
var G__27809 = seq__27800_27804;
var G__27810 = chunk__27801_27805;
var G__27811 = count__27802_27806;
var G__27812 = (i__27803_27807 + 1);
seq__27800_27804 = G__27809;
chunk__27801_27805 = G__27810;
count__27802_27806 = G__27811;
i__27803_27807 = G__27812;
continue;
}
} else
{var temp__4092__auto___27813 = cljs.core.seq(seq__27800_27804);if(temp__4092__auto___27813)
{var seq__27800_27814__$1 = temp__4092__auto___27813;if(cljs.core.chunked_seq_QMARK_(seq__27800_27814__$1))
{var c__4148__auto___27815 = cljs.core.chunk_first(seq__27800_27814__$1);{
var G__27816 = cljs.core.chunk_rest(seq__27800_27814__$1);
var G__27817 = c__4148__auto___27815;
var G__27818 = cljs.core.count(c__4148__auto___27815);
var G__27819 = 0;
seq__27800_27804 = G__27816;
chunk__27801_27805 = G__27817;
count__27802_27806 = G__27818;
i__27803_27807 = G__27819;
continue;
}
} else
{var n_27820 = cljs.core.first(seq__27800_27814__$1);n_27820.removeAttribute(cljs.core.name(name));
{
var G__27821 = cljs.core.next(seq__27800_27814__$1);
var G__27822 = null;
var G__27823 = 0;
var G__27824 = 0;
seq__27800_27804 = G__27821;
chunk__27801_27805 = G__27822;
count__27802_27806 = G__27823;
i__27803_27807 = G__27824;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27826 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27827_SHARP_){var attr = attrs__$1.item(p1__27827_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27834_27840 = cljs.core.seq(styles);var chunk__27835_27841 = null;var count__27836_27842 = 0;var i__27837_27843 = 0;while(true){
if((i__27837_27843 < count__27836_27842))
{var vec__27838_27844 = chunk__27835_27841.cljs$core$IIndexed$_nth$arity$2(null,i__27837_27843);var name_27845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_27844,0,null);var value_27846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27838_27844,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27845,cljs.core.array_seq([value_27846], 0));
{
var G__27847 = seq__27834_27840;
var G__27848 = chunk__27835_27841;
var G__27849 = count__27836_27842;
var G__27850 = (i__27837_27843 + 1);
seq__27834_27840 = G__27847;
chunk__27835_27841 = G__27848;
count__27836_27842 = G__27849;
i__27837_27843 = G__27850;
continue;
}
} else
{var temp__4092__auto___27851 = cljs.core.seq(seq__27834_27840);if(temp__4092__auto___27851)
{var seq__27834_27852__$1 = temp__4092__auto___27851;if(cljs.core.chunked_seq_QMARK_(seq__27834_27852__$1))
{var c__4148__auto___27853 = cljs.core.chunk_first(seq__27834_27852__$1);{
var G__27854 = cljs.core.chunk_rest(seq__27834_27852__$1);
var G__27855 = c__4148__auto___27853;
var G__27856 = cljs.core.count(c__4148__auto___27853);
var G__27857 = 0;
seq__27834_27840 = G__27854;
chunk__27835_27841 = G__27855;
count__27836_27842 = G__27856;
i__27837_27843 = G__27857;
continue;
}
} else
{var vec__27839_27858 = cljs.core.first(seq__27834_27852__$1);var name_27859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27839_27858,0,null);var value_27860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27839_27858,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27859,cljs.core.array_seq([value_27860], 0));
{
var G__27861 = cljs.core.next(seq__27834_27852__$1);
var G__27862 = null;
var G__27863 = 0;
var G__27864 = 0;
seq__27834_27840 = G__27861;
chunk__27835_27841 = G__27862;
count__27836_27842 = G__27863;
i__27837_27843 = G__27864;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27871_27877 = cljs.core.seq(attrs);var chunk__27872_27878 = null;var count__27873_27879 = 0;var i__27874_27880 = 0;while(true){
if((i__27874_27880 < count__27873_27879))
{var vec__27875_27881 = chunk__27872_27878.cljs$core$IIndexed$_nth$arity$2(null,i__27874_27880);var name_27882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875_27881,0,null);var value_27883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27875_27881,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27882,cljs.core.array_seq([value_27883], 0));
{
var G__27884 = seq__27871_27877;
var G__27885 = chunk__27872_27878;
var G__27886 = count__27873_27879;
var G__27887 = (i__27874_27880 + 1);
seq__27871_27877 = G__27884;
chunk__27872_27878 = G__27885;
count__27873_27879 = G__27886;
i__27874_27880 = G__27887;
continue;
}
} else
{var temp__4092__auto___27888 = cljs.core.seq(seq__27871_27877);if(temp__4092__auto___27888)
{var seq__27871_27889__$1 = temp__4092__auto___27888;if(cljs.core.chunked_seq_QMARK_(seq__27871_27889__$1))
{var c__4148__auto___27890 = cljs.core.chunk_first(seq__27871_27889__$1);{
var G__27891 = cljs.core.chunk_rest(seq__27871_27889__$1);
var G__27892 = c__4148__auto___27890;
var G__27893 = cljs.core.count(c__4148__auto___27890);
var G__27894 = 0;
seq__27871_27877 = G__27891;
chunk__27872_27878 = G__27892;
count__27873_27879 = G__27893;
i__27874_27880 = G__27894;
continue;
}
} else
{var vec__27876_27895 = cljs.core.first(seq__27871_27889__$1);var name_27896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876_27895,0,null);var value_27897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27876_27895,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27896,cljs.core.array_seq([value_27897], 0));
{
var G__27898 = cljs.core.next(seq__27871_27889__$1);
var G__27899 = null;
var G__27900 = 0;
var G__27901 = 0;
seq__27871_27877 = G__27898;
chunk__27872_27878 = G__27899;
count__27873_27879 = G__27900;
i__27874_27880 = G__27901;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27906_27910 = cljs.core.seq(domina.nodes(content));var chunk__27907_27911 = null;var count__27908_27912 = 0;var i__27909_27913 = 0;while(true){
if((i__27909_27913 < count__27908_27912))
{var node_27914 = chunk__27907_27911.cljs$core$IIndexed$_nth$arity$2(null,i__27909_27913);goog.dom.classes.add(node_27914,class$);
{
var G__27915 = seq__27906_27910;
var G__27916 = chunk__27907_27911;
var G__27917 = count__27908_27912;
var G__27918 = (i__27909_27913 + 1);
seq__27906_27910 = G__27915;
chunk__27907_27911 = G__27916;
count__27908_27912 = G__27917;
i__27909_27913 = G__27918;
continue;
}
} else
{var temp__4092__auto___27919 = cljs.core.seq(seq__27906_27910);if(temp__4092__auto___27919)
{var seq__27906_27920__$1 = temp__4092__auto___27919;if(cljs.core.chunked_seq_QMARK_(seq__27906_27920__$1))
{var c__4148__auto___27921 = cljs.core.chunk_first(seq__27906_27920__$1);{
var G__27922 = cljs.core.chunk_rest(seq__27906_27920__$1);
var G__27923 = c__4148__auto___27921;
var G__27924 = cljs.core.count(c__4148__auto___27921);
var G__27925 = 0;
seq__27906_27910 = G__27922;
chunk__27907_27911 = G__27923;
count__27908_27912 = G__27924;
i__27909_27913 = G__27925;
continue;
}
} else
{var node_27926 = cljs.core.first(seq__27906_27920__$1);goog.dom.classes.add(node_27926,class$);
{
var G__27927 = cljs.core.next(seq__27906_27920__$1);
var G__27928 = null;
var G__27929 = 0;
var G__27930 = 0;
seq__27906_27910 = G__27927;
chunk__27907_27911 = G__27928;
count__27908_27912 = G__27929;
i__27909_27913 = G__27930;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27935_27939 = cljs.core.seq(domina.nodes(content));var chunk__27936_27940 = null;var count__27937_27941 = 0;var i__27938_27942 = 0;while(true){
if((i__27938_27942 < count__27937_27941))
{var node_27943 = chunk__27936_27940.cljs$core$IIndexed$_nth$arity$2(null,i__27938_27942);goog.dom.classes.remove(node_27943,class$);
{
var G__27944 = seq__27935_27939;
var G__27945 = chunk__27936_27940;
var G__27946 = count__27937_27941;
var G__27947 = (i__27938_27942 + 1);
seq__27935_27939 = G__27944;
chunk__27936_27940 = G__27945;
count__27937_27941 = G__27946;
i__27938_27942 = G__27947;
continue;
}
} else
{var temp__4092__auto___27948 = cljs.core.seq(seq__27935_27939);if(temp__4092__auto___27948)
{var seq__27935_27949__$1 = temp__4092__auto___27948;if(cljs.core.chunked_seq_QMARK_(seq__27935_27949__$1))
{var c__4148__auto___27950 = cljs.core.chunk_first(seq__27935_27949__$1);{
var G__27951 = cljs.core.chunk_rest(seq__27935_27949__$1);
var G__27952 = c__4148__auto___27950;
var G__27953 = cljs.core.count(c__4148__auto___27950);
var G__27954 = 0;
seq__27935_27939 = G__27951;
chunk__27936_27940 = G__27952;
count__27937_27941 = G__27953;
i__27938_27942 = G__27954;
continue;
}
} else
{var node_27955 = cljs.core.first(seq__27935_27949__$1);goog.dom.classes.remove(node_27955,class$);
{
var G__27956 = cljs.core.next(seq__27935_27949__$1);
var G__27957 = null;
var G__27958 = 0;
var G__27959 = 0;
seq__27935_27939 = G__27956;
chunk__27936_27940 = G__27957;
count__27937_27941 = G__27958;
i__27938_27942 = G__27959;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27964_27968 = cljs.core.seq(domina.nodes(content));var chunk__27965_27969 = null;var count__27966_27970 = 0;var i__27967_27971 = 0;while(true){
if((i__27967_27971 < count__27966_27970))
{var node_27972 = chunk__27965_27969.cljs$core$IIndexed$_nth$arity$2(null,i__27967_27971);goog.dom.classes.toggle(node_27972,class$);
{
var G__27973 = seq__27964_27968;
var G__27974 = chunk__27965_27969;
var G__27975 = count__27966_27970;
var G__27976 = (i__27967_27971 + 1);
seq__27964_27968 = G__27973;
chunk__27965_27969 = G__27974;
count__27966_27970 = G__27975;
i__27967_27971 = G__27976;
continue;
}
} else
{var temp__4092__auto___27977 = cljs.core.seq(seq__27964_27968);if(temp__4092__auto___27977)
{var seq__27964_27978__$1 = temp__4092__auto___27977;if(cljs.core.chunked_seq_QMARK_(seq__27964_27978__$1))
{var c__4148__auto___27979 = cljs.core.chunk_first(seq__27964_27978__$1);{
var G__27980 = cljs.core.chunk_rest(seq__27964_27978__$1);
var G__27981 = c__4148__auto___27979;
var G__27982 = cljs.core.count(c__4148__auto___27979);
var G__27983 = 0;
seq__27964_27968 = G__27980;
chunk__27965_27969 = G__27981;
count__27966_27970 = G__27982;
i__27967_27971 = G__27983;
continue;
}
} else
{var node_27984 = cljs.core.first(seq__27964_27978__$1);goog.dom.classes.toggle(node_27984,class$);
{
var G__27985 = cljs.core.next(seq__27964_27978__$1);
var G__27986 = null;
var G__27987 = 0;
var G__27988 = 0;
seq__27964_27968 = G__27985;
chunk__27965_27969 = G__27986;
count__27966_27970 = G__27987;
i__27967_27971 = G__27988;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27997__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27993_27998 = cljs.core.seq(domina.nodes(content));var chunk__27994_27999 = null;var count__27995_28000 = 0;var i__27996_28001 = 0;while(true){
if((i__27996_28001 < count__27995_28000))
{var node_28002 = chunk__27994_27999.cljs$core$IIndexed$_nth$arity$2(null,i__27996_28001);goog.dom.classes.set(node_28002,classes_27997__$1);
{
var G__28003 = seq__27993_27998;
var G__28004 = chunk__27994_27999;
var G__28005 = count__27995_28000;
var G__28006 = (i__27996_28001 + 1);
seq__27993_27998 = G__28003;
chunk__27994_27999 = G__28004;
count__27995_28000 = G__28005;
i__27996_28001 = G__28006;
continue;
}
} else
{var temp__4092__auto___28007 = cljs.core.seq(seq__27993_27998);if(temp__4092__auto___28007)
{var seq__27993_28008__$1 = temp__4092__auto___28007;if(cljs.core.chunked_seq_QMARK_(seq__27993_28008__$1))
{var c__4148__auto___28009 = cljs.core.chunk_first(seq__27993_28008__$1);{
var G__28010 = cljs.core.chunk_rest(seq__27993_28008__$1);
var G__28011 = c__4148__auto___28009;
var G__28012 = cljs.core.count(c__4148__auto___28009);
var G__28013 = 0;
seq__27993_27998 = G__28010;
chunk__27994_27999 = G__28011;
count__27995_28000 = G__28012;
i__27996_28001 = G__28013;
continue;
}
} else
{var node_28014 = cljs.core.first(seq__27993_28008__$1);goog.dom.classes.set(node_28014,classes_27997__$1);
{
var G__28015 = cljs.core.next(seq__27993_28008__$1);
var G__28016 = null;
var G__28017 = 0;
var G__28018 = 0;
seq__27993_27998 = G__28015;
chunk__27994_27999 = G__28016;
count__27995_28000 = G__28017;
i__27996_28001 = G__28018;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28023_28027 = cljs.core.seq(domina.nodes(content));var chunk__28024_28028 = null;var count__28025_28029 = 0;var i__28026_28030 = 0;while(true){
if((i__28026_28030 < count__28025_28029))
{var node_28031 = chunk__28024_28028.cljs$core$IIndexed$_nth$arity$2(null,i__28026_28030);goog.dom.setTextContent(node_28031,value);
{
var G__28032 = seq__28023_28027;
var G__28033 = chunk__28024_28028;
var G__28034 = count__28025_28029;
var G__28035 = (i__28026_28030 + 1);
seq__28023_28027 = G__28032;
chunk__28024_28028 = G__28033;
count__28025_28029 = G__28034;
i__28026_28030 = G__28035;
continue;
}
} else
{var temp__4092__auto___28036 = cljs.core.seq(seq__28023_28027);if(temp__4092__auto___28036)
{var seq__28023_28037__$1 = temp__4092__auto___28036;if(cljs.core.chunked_seq_QMARK_(seq__28023_28037__$1))
{var c__4148__auto___28038 = cljs.core.chunk_first(seq__28023_28037__$1);{
var G__28039 = cljs.core.chunk_rest(seq__28023_28037__$1);
var G__28040 = c__4148__auto___28038;
var G__28041 = cljs.core.count(c__4148__auto___28038);
var G__28042 = 0;
seq__28023_28027 = G__28039;
chunk__28024_28028 = G__28040;
count__28025_28029 = G__28041;
i__28026_28030 = G__28042;
continue;
}
} else
{var node_28043 = cljs.core.first(seq__28023_28037__$1);goog.dom.setTextContent(node_28043,value);
{
var G__28044 = cljs.core.next(seq__28023_28037__$1);
var G__28045 = null;
var G__28046 = 0;
var G__28047 = 0;
seq__28023_28027 = G__28044;
chunk__28024_28028 = G__28045;
count__28025_28029 = G__28046;
i__28026_28030 = G__28047;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28052_28056 = cljs.core.seq(domina.nodes(content));var chunk__28053_28057 = null;var count__28054_28058 = 0;var i__28055_28059 = 0;while(true){
if((i__28055_28059 < count__28054_28058))
{var node_28060 = chunk__28053_28057.cljs$core$IIndexed$_nth$arity$2(null,i__28055_28059);goog.dom.forms.setValue(node_28060,value);
{
var G__28061 = seq__28052_28056;
var G__28062 = chunk__28053_28057;
var G__28063 = count__28054_28058;
var G__28064 = (i__28055_28059 + 1);
seq__28052_28056 = G__28061;
chunk__28053_28057 = G__28062;
count__28054_28058 = G__28063;
i__28055_28059 = G__28064;
continue;
}
} else
{var temp__4092__auto___28065 = cljs.core.seq(seq__28052_28056);if(temp__4092__auto___28065)
{var seq__28052_28066__$1 = temp__4092__auto___28065;if(cljs.core.chunked_seq_QMARK_(seq__28052_28066__$1))
{var c__4148__auto___28067 = cljs.core.chunk_first(seq__28052_28066__$1);{
var G__28068 = cljs.core.chunk_rest(seq__28052_28066__$1);
var G__28069 = c__4148__auto___28067;
var G__28070 = cljs.core.count(c__4148__auto___28067);
var G__28071 = 0;
seq__28052_28056 = G__28068;
chunk__28053_28057 = G__28069;
count__28054_28058 = G__28070;
i__28055_28059 = G__28071;
continue;
}
} else
{var node_28072 = cljs.core.first(seq__28052_28066__$1);goog.dom.forms.setValue(node_28072,value);
{
var G__28073 = cljs.core.next(seq__28052_28066__$1);
var G__28074 = null;
var G__28075 = 0;
var G__28076 = 0;
seq__28052_28056 = G__28073;
chunk__28053_28057 = G__28074;
count__28054_28058 = G__28075;
i__28055_28059 = G__28076;
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
{var value_28087 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28083_28088 = cljs.core.seq(domina.nodes(content));var chunk__28084_28089 = null;var count__28085_28090 = 0;var i__28086_28091 = 0;while(true){
if((i__28086_28091 < count__28085_28090))
{var node_28092 = chunk__28084_28089.cljs$core$IIndexed$_nth$arity$2(null,i__28086_28091);node_28092.innerHTML = value_28087;
{
var G__28093 = seq__28083_28088;
var G__28094 = chunk__28084_28089;
var G__28095 = count__28085_28090;
var G__28096 = (i__28086_28091 + 1);
seq__28083_28088 = G__28093;
chunk__28084_28089 = G__28094;
count__28085_28090 = G__28095;
i__28086_28091 = G__28096;
continue;
}
} else
{var temp__4092__auto___28097 = cljs.core.seq(seq__28083_28088);if(temp__4092__auto___28097)
{var seq__28083_28098__$1 = temp__4092__auto___28097;if(cljs.core.chunked_seq_QMARK_(seq__28083_28098__$1))
{var c__4148__auto___28099 = cljs.core.chunk_first(seq__28083_28098__$1);{
var G__28100 = cljs.core.chunk_rest(seq__28083_28098__$1);
var G__28101 = c__4148__auto___28099;
var G__28102 = cljs.core.count(c__4148__auto___28099);
var G__28103 = 0;
seq__28083_28088 = G__28100;
chunk__28084_28089 = G__28101;
count__28085_28090 = G__28102;
i__28086_28091 = G__28103;
continue;
}
} else
{var node_28104 = cljs.core.first(seq__28083_28098__$1);node_28104.innerHTML = value_28087;
{
var G__28105 = cljs.core.next(seq__28083_28098__$1);
var G__28106 = null;
var G__28107 = 0;
var G__28108 = 0;
seq__28083_28088 = G__28105;
chunk__28084_28089 = G__28106;
count__28085_28090 = G__28107;
i__28086_28091 = G__28108;
continue;
}
}
} else
{}
}
break;
}
}catch (e28082){if((e28082 instanceof Error))
{var e_28109 = e28082;domina.replace_children_BANG_(content,value_28087);
} else
{if(cljs.core.constant$keyword$230)
{throw e28082;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28116_28120 = cljs.core.seq(children);var chunk__28117_28121 = null;var count__28118_28122 = 0;var i__28119_28123 = 0;while(true){
if((i__28119_28123 < count__28118_28122))
{var child_28124 = chunk__28117_28121.cljs$core$IIndexed$_nth$arity$2(null,i__28119_28123);frag.appendChild(child_28124);
{
var G__28125 = seq__28116_28120;
var G__28126 = chunk__28117_28121;
var G__28127 = count__28118_28122;
var G__28128 = (i__28119_28123 + 1);
seq__28116_28120 = G__28125;
chunk__28117_28121 = G__28126;
count__28118_28122 = G__28127;
i__28119_28123 = G__28128;
continue;
}
} else
{var temp__4092__auto___28129 = cljs.core.seq(seq__28116_28120);if(temp__4092__auto___28129)
{var seq__28116_28130__$1 = temp__4092__auto___28129;if(cljs.core.chunked_seq_QMARK_(seq__28116_28130__$1))
{var c__4148__auto___28131 = cljs.core.chunk_first(seq__28116_28130__$1);{
var G__28132 = cljs.core.chunk_rest(seq__28116_28130__$1);
var G__28133 = c__4148__auto___28131;
var G__28134 = cljs.core.count(c__4148__auto___28131);
var G__28135 = 0;
seq__28116_28120 = G__28132;
chunk__28117_28121 = G__28133;
count__28118_28122 = G__28134;
i__28119_28123 = G__28135;
continue;
}
} else
{var child_28136 = cljs.core.first(seq__28116_28130__$1);frag.appendChild(child_28136);
{
var G__28137 = cljs.core.next(seq__28116_28130__$1);
var G__28138 = null;
var G__28139 = 0;
var G__28140 = 0;
seq__28116_28120 = G__28137;
chunk__28117_28121 = G__28138;
count__28118_28122 = G__28139;
i__28119_28123 = G__28140;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28110_SHARP_,p2__28111_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28110_SHARP_,p2__28111_SHARP_) : f.call(null,p1__28110_SHARP_,p2__28111_SHARP_));
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
{if((function (){var G__28142 = list_thing;if(G__28142)
{var bit__4050__auto__ = (G__28142.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28142.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28142.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28142);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28142);
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
{if((function (){var G__28143 = content;if(G__28143)
{var bit__4050__auto__ = (G__28143.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28143.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28143.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28143);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28143);
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
{if((function (){var G__28144 = content;if(G__28144)
{var bit__4050__auto__ = (G__28144.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28144.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28144.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28144);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28144);
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
