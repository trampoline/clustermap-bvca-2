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
var opt_wrapper_27687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_27688 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_27689 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$230,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_27688,table_section_wrapper_27688,opt_wrapper_27687,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_27689,table_section_wrapper_27688,cell_wrapper_27689,opt_wrapper_27687,table_section_wrapper_27688,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_27688]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__27694 = cljs.core.seq(tbody);var chunk__27695 = null;var count__27696 = 0;var i__27697 = 0;while(true){
if((i__27697 < count__27696))
{var child = chunk__27695.cljs$core$IIndexed$_nth$arity$2(null,i__27697);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27698 = seq__27694;
var G__27699 = chunk__27695;
var G__27700 = count__27696;
var G__27701 = (i__27697 + 1);
seq__27694 = G__27698;
chunk__27695 = G__27699;
count__27696 = G__27700;
i__27697 = G__27701;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27694);if(temp__4092__auto__)
{var seq__27694__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27694__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__27694__$1);{
var G__27702 = cljs.core.chunk_rest(seq__27694__$1);
var G__27703 = c__4148__auto__;
var G__27704 = cljs.core.count(c__4148__auto__);
var G__27705 = 0;
seq__27694 = G__27702;
chunk__27695 = G__27703;
count__27696 = G__27704;
i__27697 = G__27705;
continue;
}
} else
{var child = cljs.core.first(seq__27694__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__27706 = cljs.core.next(seq__27694__$1);
var G__27707 = null;
var G__27708 = 0;
var G__27709 = 0;
seq__27694 = G__27706;
chunk__27695 = G__27707;
count__27696 = G__27708;
i__27697 = G__27709;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__27711 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$230.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__27712 = wrapper.lastChild;
var G__27713 = (level - 1);
wrapper = G__27712;
level = G__27713;
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
domina.DomContent = (function (){var obj27715 = {};return obj27715;
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
log_debug.cljs$lang$applyTo = (function (arglist__27716){
var mesg = cljs.core.seq(arglist__27716);
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
log.cljs$lang$applyTo = (function (arglist__27717){
var mesg = cljs.core.seq(arglist__27717);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__27718){
var contents = cljs.core.seq(arglist__27718);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27719_SHARP_){return p1__27719_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27720_SHARP_,p2__27721_SHARP_){return goog.dom.insertChildAt(p1__27720_SHARP_,p2__27721_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__27720_SHARP_,p2__27721_SHARP_){return goog.dom.insertChildAt(p1__27720_SHARP_,p2__27721_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27723_SHARP_,p2__27722_SHARP_){return goog.dom.insertSiblingBefore(p2__27722_SHARP_,p1__27723_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27723_SHARP_,p2__27722_SHARP_){return goog.dom.insertSiblingBefore(p2__27722_SHARP_,p1__27723_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27725_SHARP_,p2__27724_SHARP_){return goog.dom.insertSiblingAfter(p2__27724_SHARP_,p1__27725_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27725_SHARP_,p2__27724_SHARP_){return goog.dom.insertSiblingAfter(p2__27724_SHARP_,p1__27725_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__27727_SHARP_,p2__27726_SHARP_){return goog.dom.replaceNode(p2__27726_SHARP_,p1__27727_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__27727_SHARP_,p2__27726_SHARP_){return goog.dom.replaceNode(p2__27726_SHARP_,p1__27727_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__27732_27736 = cljs.core.seq(domina.nodes(content));var chunk__27733_27737 = null;var count__27734_27738 = 0;var i__27735_27739 = 0;while(true){
if((i__27735_27739 < count__27734_27738))
{var n_27740 = chunk__27733_27737.cljs$core$IIndexed$_nth$arity$2(null,i__27735_27739);goog.style.setStyle(n_27740,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
{var n_27752 = cljs.core.first(seq__27732_27746__$1);goog.style.setStyle(n_27752,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__27757){
var content = cljs.core.first(arglist__27757);
arglist__27757 = cljs.core.next(arglist__27757);
var name = cljs.core.first(arglist__27757);
var value = cljs.core.rest(arglist__27757);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__27762_27766 = cljs.core.seq(domina.nodes(content));var chunk__27763_27767 = null;var count__27764_27768 = 0;var i__27765_27769 = 0;while(true){
if((i__27765_27769 < count__27764_27768))
{var n_27770 = chunk__27763_27767.cljs$core$IIndexed$_nth$arity$2(null,i__27765_27769);n_27770.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
{var n_27782 = cljs.core.first(seq__27762_27776__$1);n_27782.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
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
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__27787){
var content = cljs.core.first(arglist__27787);
arglist__27787 = cljs.core.next(arglist__27787);
var name = cljs.core.first(arglist__27787);
var value = cljs.core.rest(arglist__27787);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__27792_27796 = cljs.core.seq(domina.nodes(content));var chunk__27793_27797 = null;var count__27794_27798 = 0;var i__27795_27799 = 0;while(true){
if((i__27795_27799 < count__27794_27798))
{var n_27800 = chunk__27793_27797.cljs$core$IIndexed$_nth$arity$2(null,i__27795_27799);n_27800.removeAttribute(cljs.core.name(name));
{
var G__27801 = seq__27792_27796;
var G__27802 = chunk__27793_27797;
var G__27803 = count__27794_27798;
var G__27804 = (i__27795_27799 + 1);
seq__27792_27796 = G__27801;
chunk__27793_27797 = G__27802;
count__27794_27798 = G__27803;
i__27795_27799 = G__27804;
continue;
}
} else
{var temp__4092__auto___27805 = cljs.core.seq(seq__27792_27796);if(temp__4092__auto___27805)
{var seq__27792_27806__$1 = temp__4092__auto___27805;if(cljs.core.chunked_seq_QMARK_(seq__27792_27806__$1))
{var c__4148__auto___27807 = cljs.core.chunk_first(seq__27792_27806__$1);{
var G__27808 = cljs.core.chunk_rest(seq__27792_27806__$1);
var G__27809 = c__4148__auto___27807;
var G__27810 = cljs.core.count(c__4148__auto___27807);
var G__27811 = 0;
seq__27792_27796 = G__27808;
chunk__27793_27797 = G__27809;
count__27794_27798 = G__27810;
i__27795_27799 = G__27811;
continue;
}
} else
{var n_27812 = cljs.core.first(seq__27792_27806__$1);n_27812.removeAttribute(cljs.core.name(name));
{
var G__27813 = cljs.core.next(seq__27792_27806__$1);
var G__27814 = null;
var G__27815 = 0;
var G__27816 = 0;
seq__27792_27796 = G__27813;
chunk__27793_27797 = G__27814;
count__27794_27798 = G__27815;
i__27795_27799 = G__27816;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__27818 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27818,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$229)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__27819_SHARP_){var attr = attrs__$1.item(p1__27819_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__27826_27832 = cljs.core.seq(styles);var chunk__27827_27833 = null;var count__27828_27834 = 0;var i__27829_27835 = 0;while(true){
if((i__27829_27835 < count__27828_27834))
{var vec__27830_27836 = chunk__27827_27833.cljs$core$IIndexed$_nth$arity$2(null,i__27829_27835);var name_27837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830_27836,0,null);var value_27838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27830_27836,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27837,cljs.core.array_seq([value_27838], 0));
{
var G__27839 = seq__27826_27832;
var G__27840 = chunk__27827_27833;
var G__27841 = count__27828_27834;
var G__27842 = (i__27829_27835 + 1);
seq__27826_27832 = G__27839;
chunk__27827_27833 = G__27840;
count__27828_27834 = G__27841;
i__27829_27835 = G__27842;
continue;
}
} else
{var temp__4092__auto___27843 = cljs.core.seq(seq__27826_27832);if(temp__4092__auto___27843)
{var seq__27826_27844__$1 = temp__4092__auto___27843;if(cljs.core.chunked_seq_QMARK_(seq__27826_27844__$1))
{var c__4148__auto___27845 = cljs.core.chunk_first(seq__27826_27844__$1);{
var G__27846 = cljs.core.chunk_rest(seq__27826_27844__$1);
var G__27847 = c__4148__auto___27845;
var G__27848 = cljs.core.count(c__4148__auto___27845);
var G__27849 = 0;
seq__27826_27832 = G__27846;
chunk__27827_27833 = G__27847;
count__27828_27834 = G__27848;
i__27829_27835 = G__27849;
continue;
}
} else
{var vec__27831_27850 = cljs.core.first(seq__27826_27844__$1);var name_27851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831_27850,0,null);var value_27852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831_27850,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27851,cljs.core.array_seq([value_27852], 0));
{
var G__27853 = cljs.core.next(seq__27826_27844__$1);
var G__27854 = null;
var G__27855 = 0;
var G__27856 = 0;
seq__27826_27832 = G__27853;
chunk__27827_27833 = G__27854;
count__27828_27834 = G__27855;
i__27829_27835 = G__27856;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__27863_27869 = cljs.core.seq(attrs);var chunk__27864_27870 = null;var count__27865_27871 = 0;var i__27866_27872 = 0;while(true){
if((i__27866_27872 < count__27865_27871))
{var vec__27867_27873 = chunk__27864_27870.cljs$core$IIndexed$_nth$arity$2(null,i__27866_27872);var name_27874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867_27873,0,null);var value_27875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27867_27873,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27874,cljs.core.array_seq([value_27875], 0));
{
var G__27876 = seq__27863_27869;
var G__27877 = chunk__27864_27870;
var G__27878 = count__27865_27871;
var G__27879 = (i__27866_27872 + 1);
seq__27863_27869 = G__27876;
chunk__27864_27870 = G__27877;
count__27865_27871 = G__27878;
i__27866_27872 = G__27879;
continue;
}
} else
{var temp__4092__auto___27880 = cljs.core.seq(seq__27863_27869);if(temp__4092__auto___27880)
{var seq__27863_27881__$1 = temp__4092__auto___27880;if(cljs.core.chunked_seq_QMARK_(seq__27863_27881__$1))
{var c__4148__auto___27882 = cljs.core.chunk_first(seq__27863_27881__$1);{
var G__27883 = cljs.core.chunk_rest(seq__27863_27881__$1);
var G__27884 = c__4148__auto___27882;
var G__27885 = cljs.core.count(c__4148__auto___27882);
var G__27886 = 0;
seq__27863_27869 = G__27883;
chunk__27864_27870 = G__27884;
count__27865_27871 = G__27885;
i__27866_27872 = G__27886;
continue;
}
} else
{var vec__27868_27887 = cljs.core.first(seq__27863_27881__$1);var name_27888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27868_27887,0,null);var value_27889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27868_27887,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27888,cljs.core.array_seq([value_27889], 0));
{
var G__27890 = cljs.core.next(seq__27863_27881__$1);
var G__27891 = null;
var G__27892 = 0;
var G__27893 = 0;
seq__27863_27869 = G__27890;
chunk__27864_27870 = G__27891;
count__27865_27871 = G__27892;
i__27866_27872 = G__27893;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27898_27902 = cljs.core.seq(domina.nodes(content));var chunk__27899_27903 = null;var count__27900_27904 = 0;var i__27901_27905 = 0;while(true){
if((i__27901_27905 < count__27900_27904))
{var node_27906 = chunk__27899_27903.cljs$core$IIndexed$_nth$arity$2(null,i__27901_27905);goog.dom.classes.add(node_27906,class$);
{
var G__27907 = seq__27898_27902;
var G__27908 = chunk__27899_27903;
var G__27909 = count__27900_27904;
var G__27910 = (i__27901_27905 + 1);
seq__27898_27902 = G__27907;
chunk__27899_27903 = G__27908;
count__27900_27904 = G__27909;
i__27901_27905 = G__27910;
continue;
}
} else
{var temp__4092__auto___27911 = cljs.core.seq(seq__27898_27902);if(temp__4092__auto___27911)
{var seq__27898_27912__$1 = temp__4092__auto___27911;if(cljs.core.chunked_seq_QMARK_(seq__27898_27912__$1))
{var c__4148__auto___27913 = cljs.core.chunk_first(seq__27898_27912__$1);{
var G__27914 = cljs.core.chunk_rest(seq__27898_27912__$1);
var G__27915 = c__4148__auto___27913;
var G__27916 = cljs.core.count(c__4148__auto___27913);
var G__27917 = 0;
seq__27898_27902 = G__27914;
chunk__27899_27903 = G__27915;
count__27900_27904 = G__27916;
i__27901_27905 = G__27917;
continue;
}
} else
{var node_27918 = cljs.core.first(seq__27898_27912__$1);goog.dom.classes.add(node_27918,class$);
{
var G__27919 = cljs.core.next(seq__27898_27912__$1);
var G__27920 = null;
var G__27921 = 0;
var G__27922 = 0;
seq__27898_27902 = G__27919;
chunk__27899_27903 = G__27920;
count__27900_27904 = G__27921;
i__27901_27905 = G__27922;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27927_27931 = cljs.core.seq(domina.nodes(content));var chunk__27928_27932 = null;var count__27929_27933 = 0;var i__27930_27934 = 0;while(true){
if((i__27930_27934 < count__27929_27933))
{var node_27935 = chunk__27928_27932.cljs$core$IIndexed$_nth$arity$2(null,i__27930_27934);goog.dom.classes.remove(node_27935,class$);
{
var G__27936 = seq__27927_27931;
var G__27937 = chunk__27928_27932;
var G__27938 = count__27929_27933;
var G__27939 = (i__27930_27934 + 1);
seq__27927_27931 = G__27936;
chunk__27928_27932 = G__27937;
count__27929_27933 = G__27938;
i__27930_27934 = G__27939;
continue;
}
} else
{var temp__4092__auto___27940 = cljs.core.seq(seq__27927_27931);if(temp__4092__auto___27940)
{var seq__27927_27941__$1 = temp__4092__auto___27940;if(cljs.core.chunked_seq_QMARK_(seq__27927_27941__$1))
{var c__4148__auto___27942 = cljs.core.chunk_first(seq__27927_27941__$1);{
var G__27943 = cljs.core.chunk_rest(seq__27927_27941__$1);
var G__27944 = c__4148__auto___27942;
var G__27945 = cljs.core.count(c__4148__auto___27942);
var G__27946 = 0;
seq__27927_27931 = G__27943;
chunk__27928_27932 = G__27944;
count__27929_27933 = G__27945;
i__27930_27934 = G__27946;
continue;
}
} else
{var node_27947 = cljs.core.first(seq__27927_27941__$1);goog.dom.classes.remove(node_27947,class$);
{
var G__27948 = cljs.core.next(seq__27927_27941__$1);
var G__27949 = null;
var G__27950 = 0;
var G__27951 = 0;
seq__27927_27931 = G__27948;
chunk__27928_27932 = G__27949;
count__27929_27933 = G__27950;
i__27930_27934 = G__27951;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27956_27960 = cljs.core.seq(domina.nodes(content));var chunk__27957_27961 = null;var count__27958_27962 = 0;var i__27959_27963 = 0;while(true){
if((i__27959_27963 < count__27958_27962))
{var node_27964 = chunk__27957_27961.cljs$core$IIndexed$_nth$arity$2(null,i__27959_27963);goog.dom.classes.toggle(node_27964,class$);
{
var G__27965 = seq__27956_27960;
var G__27966 = chunk__27957_27961;
var G__27967 = count__27958_27962;
var G__27968 = (i__27959_27963 + 1);
seq__27956_27960 = G__27965;
chunk__27957_27961 = G__27966;
count__27958_27962 = G__27967;
i__27959_27963 = G__27968;
continue;
}
} else
{var temp__4092__auto___27969 = cljs.core.seq(seq__27956_27960);if(temp__4092__auto___27969)
{var seq__27956_27970__$1 = temp__4092__auto___27969;if(cljs.core.chunked_seq_QMARK_(seq__27956_27970__$1))
{var c__4148__auto___27971 = cljs.core.chunk_first(seq__27956_27970__$1);{
var G__27972 = cljs.core.chunk_rest(seq__27956_27970__$1);
var G__27973 = c__4148__auto___27971;
var G__27974 = cljs.core.count(c__4148__auto___27971);
var G__27975 = 0;
seq__27956_27960 = G__27972;
chunk__27957_27961 = G__27973;
count__27958_27962 = G__27974;
i__27959_27963 = G__27975;
continue;
}
} else
{var node_27976 = cljs.core.first(seq__27956_27970__$1);goog.dom.classes.toggle(node_27976,class$);
{
var G__27977 = cljs.core.next(seq__27956_27970__$1);
var G__27978 = null;
var G__27979 = 0;
var G__27980 = 0;
seq__27956_27960 = G__27977;
chunk__27957_27961 = G__27978;
count__27958_27962 = G__27979;
i__27959_27963 = G__27980;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27989__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27985_27990 = cljs.core.seq(domina.nodes(content));var chunk__27986_27991 = null;var count__27987_27992 = 0;var i__27988_27993 = 0;while(true){
if((i__27988_27993 < count__27987_27992))
{var node_27994 = chunk__27986_27991.cljs$core$IIndexed$_nth$arity$2(null,i__27988_27993);goog.dom.classes.set(node_27994,classes_27989__$1);
{
var G__27995 = seq__27985_27990;
var G__27996 = chunk__27986_27991;
var G__27997 = count__27987_27992;
var G__27998 = (i__27988_27993 + 1);
seq__27985_27990 = G__27995;
chunk__27986_27991 = G__27996;
count__27987_27992 = G__27997;
i__27988_27993 = G__27998;
continue;
}
} else
{var temp__4092__auto___27999 = cljs.core.seq(seq__27985_27990);if(temp__4092__auto___27999)
{var seq__27985_28000__$1 = temp__4092__auto___27999;if(cljs.core.chunked_seq_QMARK_(seq__27985_28000__$1))
{var c__4148__auto___28001 = cljs.core.chunk_first(seq__27985_28000__$1);{
var G__28002 = cljs.core.chunk_rest(seq__27985_28000__$1);
var G__28003 = c__4148__auto___28001;
var G__28004 = cljs.core.count(c__4148__auto___28001);
var G__28005 = 0;
seq__27985_27990 = G__28002;
chunk__27986_27991 = G__28003;
count__27987_27992 = G__28004;
i__27988_27993 = G__28005;
continue;
}
} else
{var node_28006 = cljs.core.first(seq__27985_28000__$1);goog.dom.classes.set(node_28006,classes_27989__$1);
{
var G__28007 = cljs.core.next(seq__27985_28000__$1);
var G__28008 = null;
var G__28009 = 0;
var G__28010 = 0;
seq__27985_27990 = G__28007;
chunk__27986_27991 = G__28008;
count__27987_27992 = G__28009;
i__27988_27993 = G__28010;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28015_28019 = cljs.core.seq(domina.nodes(content));var chunk__28016_28020 = null;var count__28017_28021 = 0;var i__28018_28022 = 0;while(true){
if((i__28018_28022 < count__28017_28021))
{var node_28023 = chunk__28016_28020.cljs$core$IIndexed$_nth$arity$2(null,i__28018_28022);goog.dom.setTextContent(node_28023,value);
{
var G__28024 = seq__28015_28019;
var G__28025 = chunk__28016_28020;
var G__28026 = count__28017_28021;
var G__28027 = (i__28018_28022 + 1);
seq__28015_28019 = G__28024;
chunk__28016_28020 = G__28025;
count__28017_28021 = G__28026;
i__28018_28022 = G__28027;
continue;
}
} else
{var temp__4092__auto___28028 = cljs.core.seq(seq__28015_28019);if(temp__4092__auto___28028)
{var seq__28015_28029__$1 = temp__4092__auto___28028;if(cljs.core.chunked_seq_QMARK_(seq__28015_28029__$1))
{var c__4148__auto___28030 = cljs.core.chunk_first(seq__28015_28029__$1);{
var G__28031 = cljs.core.chunk_rest(seq__28015_28029__$1);
var G__28032 = c__4148__auto___28030;
var G__28033 = cljs.core.count(c__4148__auto___28030);
var G__28034 = 0;
seq__28015_28019 = G__28031;
chunk__28016_28020 = G__28032;
count__28017_28021 = G__28033;
i__28018_28022 = G__28034;
continue;
}
} else
{var node_28035 = cljs.core.first(seq__28015_28029__$1);goog.dom.setTextContent(node_28035,value);
{
var G__28036 = cljs.core.next(seq__28015_28029__$1);
var G__28037 = null;
var G__28038 = 0;
var G__28039 = 0;
seq__28015_28019 = G__28036;
chunk__28016_28020 = G__28037;
count__28017_28021 = G__28038;
i__28018_28022 = G__28039;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28044_28048 = cljs.core.seq(domina.nodes(content));var chunk__28045_28049 = null;var count__28046_28050 = 0;var i__28047_28051 = 0;while(true){
if((i__28047_28051 < count__28046_28050))
{var node_28052 = chunk__28045_28049.cljs$core$IIndexed$_nth$arity$2(null,i__28047_28051);goog.dom.forms.setValue(node_28052,value);
{
var G__28053 = seq__28044_28048;
var G__28054 = chunk__28045_28049;
var G__28055 = count__28046_28050;
var G__28056 = (i__28047_28051 + 1);
seq__28044_28048 = G__28053;
chunk__28045_28049 = G__28054;
count__28046_28050 = G__28055;
i__28047_28051 = G__28056;
continue;
}
} else
{var temp__4092__auto___28057 = cljs.core.seq(seq__28044_28048);if(temp__4092__auto___28057)
{var seq__28044_28058__$1 = temp__4092__auto___28057;if(cljs.core.chunked_seq_QMARK_(seq__28044_28058__$1))
{var c__4148__auto___28059 = cljs.core.chunk_first(seq__28044_28058__$1);{
var G__28060 = cljs.core.chunk_rest(seq__28044_28058__$1);
var G__28061 = c__4148__auto___28059;
var G__28062 = cljs.core.count(c__4148__auto___28059);
var G__28063 = 0;
seq__28044_28048 = G__28060;
chunk__28045_28049 = G__28061;
count__28046_28050 = G__28062;
i__28047_28051 = G__28063;
continue;
}
} else
{var node_28064 = cljs.core.first(seq__28044_28058__$1);goog.dom.forms.setValue(node_28064,value);
{
var G__28065 = cljs.core.next(seq__28044_28058__$1);
var G__28066 = null;
var G__28067 = 0;
var G__28068 = 0;
seq__28044_28048 = G__28065;
chunk__28045_28049 = G__28066;
count__28046_28050 = G__28067;
i__28047_28051 = G__28068;
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
{var value_28079 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28075_28080 = cljs.core.seq(domina.nodes(content));var chunk__28076_28081 = null;var count__28077_28082 = 0;var i__28078_28083 = 0;while(true){
if((i__28078_28083 < count__28077_28082))
{var node_28084 = chunk__28076_28081.cljs$core$IIndexed$_nth$arity$2(null,i__28078_28083);node_28084.innerHTML = value_28079;
{
var G__28085 = seq__28075_28080;
var G__28086 = chunk__28076_28081;
var G__28087 = count__28077_28082;
var G__28088 = (i__28078_28083 + 1);
seq__28075_28080 = G__28085;
chunk__28076_28081 = G__28086;
count__28077_28082 = G__28087;
i__28078_28083 = G__28088;
continue;
}
} else
{var temp__4092__auto___28089 = cljs.core.seq(seq__28075_28080);if(temp__4092__auto___28089)
{var seq__28075_28090__$1 = temp__4092__auto___28089;if(cljs.core.chunked_seq_QMARK_(seq__28075_28090__$1))
{var c__4148__auto___28091 = cljs.core.chunk_first(seq__28075_28090__$1);{
var G__28092 = cljs.core.chunk_rest(seq__28075_28090__$1);
var G__28093 = c__4148__auto___28091;
var G__28094 = cljs.core.count(c__4148__auto___28091);
var G__28095 = 0;
seq__28075_28080 = G__28092;
chunk__28076_28081 = G__28093;
count__28077_28082 = G__28094;
i__28078_28083 = G__28095;
continue;
}
} else
{var node_28096 = cljs.core.first(seq__28075_28090__$1);node_28096.innerHTML = value_28079;
{
var G__28097 = cljs.core.next(seq__28075_28090__$1);
var G__28098 = null;
var G__28099 = 0;
var G__28100 = 0;
seq__28075_28080 = G__28097;
chunk__28076_28081 = G__28098;
count__28077_28082 = G__28099;
i__28078_28083 = G__28100;
continue;
}
}
} else
{}
}
break;
}
}catch (e28074){if((e28074 instanceof Error))
{var e_28101 = e28074;domina.replace_children_BANG_(content,value_28079);
} else
{if(cljs.core.constant$keyword$229)
{throw e28074;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28108_28112 = cljs.core.seq(children);var chunk__28109_28113 = null;var count__28110_28114 = 0;var i__28111_28115 = 0;while(true){
if((i__28111_28115 < count__28110_28114))
{var child_28116 = chunk__28109_28113.cljs$core$IIndexed$_nth$arity$2(null,i__28111_28115);frag.appendChild(child_28116);
{
var G__28117 = seq__28108_28112;
var G__28118 = chunk__28109_28113;
var G__28119 = count__28110_28114;
var G__28120 = (i__28111_28115 + 1);
seq__28108_28112 = G__28117;
chunk__28109_28113 = G__28118;
count__28110_28114 = G__28119;
i__28111_28115 = G__28120;
continue;
}
} else
{var temp__4092__auto___28121 = cljs.core.seq(seq__28108_28112);if(temp__4092__auto___28121)
{var seq__28108_28122__$1 = temp__4092__auto___28121;if(cljs.core.chunked_seq_QMARK_(seq__28108_28122__$1))
{var c__4148__auto___28123 = cljs.core.chunk_first(seq__28108_28122__$1);{
var G__28124 = cljs.core.chunk_rest(seq__28108_28122__$1);
var G__28125 = c__4148__auto___28123;
var G__28126 = cljs.core.count(c__4148__auto___28123);
var G__28127 = 0;
seq__28108_28112 = G__28124;
chunk__28109_28113 = G__28125;
count__28110_28114 = G__28126;
i__28111_28115 = G__28127;
continue;
}
} else
{var child_28128 = cljs.core.first(seq__28108_28122__$1);frag.appendChild(child_28128);
{
var G__28129 = cljs.core.next(seq__28108_28122__$1);
var G__28130 = null;
var G__28131 = 0;
var G__28132 = 0;
seq__28108_28112 = G__28129;
chunk__28109_28113 = G__28130;
count__28110_28114 = G__28131;
i__28111_28115 = G__28132;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__28102_SHARP_,p2__28103_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__28102_SHARP_,p2__28103_SHARP_) : f.call(null,p1__28102_SHARP_,p2__28103_SHARP_));
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
{if((function (){var G__28134 = list_thing;if(G__28134)
{var bit__4050__auto__ = (G__28134.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28134.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28134.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28134);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28134);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$230)
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
{if((function (){var G__28135 = content;if(G__28135)
{var bit__4050__auto__ = (G__28135.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28135.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28135.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28135);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28135);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$230)
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
{if((function (){var G__28136 = content;if(G__28136)
{var bit__4050__auto__ = (G__28136.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__28136.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28136.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28136);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__28136);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$230)
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
