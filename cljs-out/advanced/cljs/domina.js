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
var opt_wrapper_26815 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_26816 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_26817 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$211,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_26816,table_section_wrapper_26816,opt_wrapper_26815,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_26817,table_section_wrapper_26816,cell_wrapper_26817,opt_wrapper_26815,table_section_wrapper_26816,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_26816]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__26822 = cljs.core.seq(tbody);var chunk__26823 = null;var count__26824 = 0;var i__26825 = 0;while(true){
if((i__26825 < count__26824))
{var child = chunk__26823.cljs$core$IIndexed$_nth$arity$2(null,i__26825);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26826 = seq__26822;
var G__26827 = chunk__26823;
var G__26828 = count__26824;
var G__26829 = (i__26825 + 1);
seq__26822 = G__26826;
chunk__26823 = G__26827;
count__26824 = G__26828;
i__26825 = G__26829;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__26822);if(temp__4092__auto__)
{var seq__26822__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__26822__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__26822__$1);{
var G__26830 = cljs.core.chunk_rest(seq__26822__$1);
var G__26831 = c__4148__auto__;
var G__26832 = cljs.core.count(c__4148__auto__);
var G__26833 = 0;
seq__26822 = G__26830;
chunk__26823 = G__26831;
count__26824 = G__26832;
i__26825 = G__26833;
continue;
}
} else
{var child = cljs.core.first(seq__26822__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__26834 = cljs.core.next(seq__26822__$1);
var G__26835 = null;
var G__26836 = 0;
var G__26837 = 0;
seq__26822 = G__26834;
chunk__26823 = G__26835;
count__26824 = G__26836;
i__26825 = G__26837;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__26839 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$211.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26839,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26839,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26839,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__26840 = wrapper.lastChild;
var G__26841 = (level - 1);
wrapper = G__26840;
level = G__26841;
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
domina.DomContent = (function (){var obj26843 = {};return obj26843;
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
log_debug.cljs$lang$applyTo = (function (arglist__26844){
var mesg = cljs.core.seq(arglist__26844);
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
log.cljs$lang$applyTo = (function (arglist__26845){
var mesg = cljs.core.seq(arglist__26845);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__26846){
var contents = cljs.core.seq(arglist__26846);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26847_SHARP_){return p1__26847_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26848_SHARP_,p2__26849_SHARP_){return goog.dom.insertChildAt(p1__26848_SHARP_,p2__26849_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__26848_SHARP_,p2__26849_SHARP_){return goog.dom.insertChildAt(p1__26848_SHARP_,p2__26849_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26851_SHARP_,p2__26850_SHARP_){return goog.dom.insertSiblingBefore(p2__26850_SHARP_,p1__26851_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26851_SHARP_,p2__26850_SHARP_){return goog.dom.insertSiblingBefore(p2__26850_SHARP_,p1__26851_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26853_SHARP_,p2__26852_SHARP_){return goog.dom.insertSiblingAfter(p2__26852_SHARP_,p1__26853_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26853_SHARP_,p2__26852_SHARP_){return goog.dom.insertSiblingAfter(p2__26852_SHARP_,p1__26853_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__26855_SHARP_,p2__26854_SHARP_){return goog.dom.replaceNode(p2__26854_SHARP_,p1__26855_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__26855_SHARP_,p2__26854_SHARP_){return goog.dom.replaceNode(p2__26854_SHARP_,p1__26855_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__26860_26864 = cljs.core.seq(domina.nodes(content));var chunk__26861_26865 = null;var count__26862_26866 = 0;var i__26863_26867 = 0;while(true){
if((i__26863_26867 < count__26862_26866))
{var n_26868 = chunk__26861_26865.cljs$core$IIndexed$_nth$arity$2(null,i__26863_26867);goog.style.setStyle(n_26868,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26869 = seq__26860_26864;
var G__26870 = chunk__26861_26865;
var G__26871 = count__26862_26866;
var G__26872 = (i__26863_26867 + 1);
seq__26860_26864 = G__26869;
chunk__26861_26865 = G__26870;
count__26862_26866 = G__26871;
i__26863_26867 = G__26872;
continue;
}
} else
{var temp__4092__auto___26873 = cljs.core.seq(seq__26860_26864);if(temp__4092__auto___26873)
{var seq__26860_26874__$1 = temp__4092__auto___26873;if(cljs.core.chunked_seq_QMARK_(seq__26860_26874__$1))
{var c__4148__auto___26875 = cljs.core.chunk_first(seq__26860_26874__$1);{
var G__26876 = cljs.core.chunk_rest(seq__26860_26874__$1);
var G__26877 = c__4148__auto___26875;
var G__26878 = cljs.core.count(c__4148__auto___26875);
var G__26879 = 0;
seq__26860_26864 = G__26876;
chunk__26861_26865 = G__26877;
count__26862_26866 = G__26878;
i__26863_26867 = G__26879;
continue;
}
} else
{var n_26880 = cljs.core.first(seq__26860_26874__$1);goog.style.setStyle(n_26880,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26881 = cljs.core.next(seq__26860_26874__$1);
var G__26882 = null;
var G__26883 = 0;
var G__26884 = 0;
seq__26860_26864 = G__26881;
chunk__26861_26865 = G__26882;
count__26862_26866 = G__26883;
i__26863_26867 = G__26884;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__26885){
var content = cljs.core.first(arglist__26885);
arglist__26885 = cljs.core.next(arglist__26885);
var name = cljs.core.first(arglist__26885);
var value = cljs.core.rest(arglist__26885);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__26890_26894 = cljs.core.seq(domina.nodes(content));var chunk__26891_26895 = null;var count__26892_26896 = 0;var i__26893_26897 = 0;while(true){
if((i__26893_26897 < count__26892_26896))
{var n_26898 = chunk__26891_26895.cljs$core$IIndexed$_nth$arity$2(null,i__26893_26897);n_26898.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26899 = seq__26890_26894;
var G__26900 = chunk__26891_26895;
var G__26901 = count__26892_26896;
var G__26902 = (i__26893_26897 + 1);
seq__26890_26894 = G__26899;
chunk__26891_26895 = G__26900;
count__26892_26896 = G__26901;
i__26893_26897 = G__26902;
continue;
}
} else
{var temp__4092__auto___26903 = cljs.core.seq(seq__26890_26894);if(temp__4092__auto___26903)
{var seq__26890_26904__$1 = temp__4092__auto___26903;if(cljs.core.chunked_seq_QMARK_(seq__26890_26904__$1))
{var c__4148__auto___26905 = cljs.core.chunk_first(seq__26890_26904__$1);{
var G__26906 = cljs.core.chunk_rest(seq__26890_26904__$1);
var G__26907 = c__4148__auto___26905;
var G__26908 = cljs.core.count(c__4148__auto___26905);
var G__26909 = 0;
seq__26890_26894 = G__26906;
chunk__26891_26895 = G__26907;
count__26892_26896 = G__26908;
i__26893_26897 = G__26909;
continue;
}
} else
{var n_26910 = cljs.core.first(seq__26890_26904__$1);n_26910.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__26911 = cljs.core.next(seq__26890_26904__$1);
var G__26912 = null;
var G__26913 = 0;
var G__26914 = 0;
seq__26890_26894 = G__26911;
chunk__26891_26895 = G__26912;
count__26892_26896 = G__26913;
i__26893_26897 = G__26914;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__26915){
var content = cljs.core.first(arglist__26915);
arglist__26915 = cljs.core.next(arglist__26915);
var name = cljs.core.first(arglist__26915);
var value = cljs.core.rest(arglist__26915);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__26920_26924 = cljs.core.seq(domina.nodes(content));var chunk__26921_26925 = null;var count__26922_26926 = 0;var i__26923_26927 = 0;while(true){
if((i__26923_26927 < count__26922_26926))
{var n_26928 = chunk__26921_26925.cljs$core$IIndexed$_nth$arity$2(null,i__26923_26927);n_26928.removeAttribute(cljs.core.name(name));
{
var G__26929 = seq__26920_26924;
var G__26930 = chunk__26921_26925;
var G__26931 = count__26922_26926;
var G__26932 = (i__26923_26927 + 1);
seq__26920_26924 = G__26929;
chunk__26921_26925 = G__26930;
count__26922_26926 = G__26931;
i__26923_26927 = G__26932;
continue;
}
} else
{var temp__4092__auto___26933 = cljs.core.seq(seq__26920_26924);if(temp__4092__auto___26933)
{var seq__26920_26934__$1 = temp__4092__auto___26933;if(cljs.core.chunked_seq_QMARK_(seq__26920_26934__$1))
{var c__4148__auto___26935 = cljs.core.chunk_first(seq__26920_26934__$1);{
var G__26936 = cljs.core.chunk_rest(seq__26920_26934__$1);
var G__26937 = c__4148__auto___26935;
var G__26938 = cljs.core.count(c__4148__auto___26935);
var G__26939 = 0;
seq__26920_26924 = G__26936;
chunk__26921_26925 = G__26937;
count__26922_26926 = G__26938;
i__26923_26927 = G__26939;
continue;
}
} else
{var n_26940 = cljs.core.first(seq__26920_26934__$1);n_26940.removeAttribute(cljs.core.name(name));
{
var G__26941 = cljs.core.next(seq__26920_26934__$1);
var G__26942 = null;
var G__26943 = 0;
var G__26944 = 0;
seq__26920_26924 = G__26941;
chunk__26921_26925 = G__26942;
count__26922_26926 = G__26943;
i__26923_26927 = G__26944;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__26946 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26946,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$210)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26947_SHARP_){var attr = attrs__$1.item(p1__26947_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__26954_26960 = cljs.core.seq(styles);var chunk__26955_26961 = null;var count__26956_26962 = 0;var i__26957_26963 = 0;while(true){
if((i__26957_26963 < count__26956_26962))
{var vec__26958_26964 = chunk__26955_26961.cljs$core$IIndexed$_nth$arity$2(null,i__26957_26963);var name_26965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26958_26964,0,null);var value_26966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26958_26964,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26965,cljs.core.array_seq([value_26966], 0));
{
var G__26967 = seq__26954_26960;
var G__26968 = chunk__26955_26961;
var G__26969 = count__26956_26962;
var G__26970 = (i__26957_26963 + 1);
seq__26954_26960 = G__26967;
chunk__26955_26961 = G__26968;
count__26956_26962 = G__26969;
i__26957_26963 = G__26970;
continue;
}
} else
{var temp__4092__auto___26971 = cljs.core.seq(seq__26954_26960);if(temp__4092__auto___26971)
{var seq__26954_26972__$1 = temp__4092__auto___26971;if(cljs.core.chunked_seq_QMARK_(seq__26954_26972__$1))
{var c__4148__auto___26973 = cljs.core.chunk_first(seq__26954_26972__$1);{
var G__26974 = cljs.core.chunk_rest(seq__26954_26972__$1);
var G__26975 = c__4148__auto___26973;
var G__26976 = cljs.core.count(c__4148__auto___26973);
var G__26977 = 0;
seq__26954_26960 = G__26974;
chunk__26955_26961 = G__26975;
count__26956_26962 = G__26976;
i__26957_26963 = G__26977;
continue;
}
} else
{var vec__26959_26978 = cljs.core.first(seq__26954_26972__$1);var name_26979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26959_26978,0,null);var value_26980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26959_26978,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_26979,cljs.core.array_seq([value_26980], 0));
{
var G__26981 = cljs.core.next(seq__26954_26972__$1);
var G__26982 = null;
var G__26983 = 0;
var G__26984 = 0;
seq__26954_26960 = G__26981;
chunk__26955_26961 = G__26982;
count__26956_26962 = G__26983;
i__26957_26963 = G__26984;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__26991_26997 = cljs.core.seq(attrs);var chunk__26992_26998 = null;var count__26993_26999 = 0;var i__26994_27000 = 0;while(true){
if((i__26994_27000 < count__26993_26999))
{var vec__26995_27001 = chunk__26992_26998.cljs$core$IIndexed$_nth$arity$2(null,i__26994_27000);var name_27002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26995_27001,0,null);var value_27003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26995_27001,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27002,cljs.core.array_seq([value_27003], 0));
{
var G__27004 = seq__26991_26997;
var G__27005 = chunk__26992_26998;
var G__27006 = count__26993_26999;
var G__27007 = (i__26994_27000 + 1);
seq__26991_26997 = G__27004;
chunk__26992_26998 = G__27005;
count__26993_26999 = G__27006;
i__26994_27000 = G__27007;
continue;
}
} else
{var temp__4092__auto___27008 = cljs.core.seq(seq__26991_26997);if(temp__4092__auto___27008)
{var seq__26991_27009__$1 = temp__4092__auto___27008;if(cljs.core.chunked_seq_QMARK_(seq__26991_27009__$1))
{var c__4148__auto___27010 = cljs.core.chunk_first(seq__26991_27009__$1);{
var G__27011 = cljs.core.chunk_rest(seq__26991_27009__$1);
var G__27012 = c__4148__auto___27010;
var G__27013 = cljs.core.count(c__4148__auto___27010);
var G__27014 = 0;
seq__26991_26997 = G__27011;
chunk__26992_26998 = G__27012;
count__26993_26999 = G__27013;
i__26994_27000 = G__27014;
continue;
}
} else
{var vec__26996_27015 = cljs.core.first(seq__26991_27009__$1);var name_27016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27015,0,null);var value_27017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26996_27015,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_27016,cljs.core.array_seq([value_27017], 0));
{
var G__27018 = cljs.core.next(seq__26991_27009__$1);
var G__27019 = null;
var G__27020 = 0;
var G__27021 = 0;
seq__26991_26997 = G__27018;
chunk__26992_26998 = G__27019;
count__26993_26999 = G__27020;
i__26994_27000 = G__27021;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__27026_27030 = cljs.core.seq(domina.nodes(content));var chunk__27027_27031 = null;var count__27028_27032 = 0;var i__27029_27033 = 0;while(true){
if((i__27029_27033 < count__27028_27032))
{var node_27034 = chunk__27027_27031.cljs$core$IIndexed$_nth$arity$2(null,i__27029_27033);goog.dom.classes.add(node_27034,class$);
{
var G__27035 = seq__27026_27030;
var G__27036 = chunk__27027_27031;
var G__27037 = count__27028_27032;
var G__27038 = (i__27029_27033 + 1);
seq__27026_27030 = G__27035;
chunk__27027_27031 = G__27036;
count__27028_27032 = G__27037;
i__27029_27033 = G__27038;
continue;
}
} else
{var temp__4092__auto___27039 = cljs.core.seq(seq__27026_27030);if(temp__4092__auto___27039)
{var seq__27026_27040__$1 = temp__4092__auto___27039;if(cljs.core.chunked_seq_QMARK_(seq__27026_27040__$1))
{var c__4148__auto___27041 = cljs.core.chunk_first(seq__27026_27040__$1);{
var G__27042 = cljs.core.chunk_rest(seq__27026_27040__$1);
var G__27043 = c__4148__auto___27041;
var G__27044 = cljs.core.count(c__4148__auto___27041);
var G__27045 = 0;
seq__27026_27030 = G__27042;
chunk__27027_27031 = G__27043;
count__27028_27032 = G__27044;
i__27029_27033 = G__27045;
continue;
}
} else
{var node_27046 = cljs.core.first(seq__27026_27040__$1);goog.dom.classes.add(node_27046,class$);
{
var G__27047 = cljs.core.next(seq__27026_27040__$1);
var G__27048 = null;
var G__27049 = 0;
var G__27050 = 0;
seq__27026_27030 = G__27047;
chunk__27027_27031 = G__27048;
count__27028_27032 = G__27049;
i__27029_27033 = G__27050;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__27055_27059 = cljs.core.seq(domina.nodes(content));var chunk__27056_27060 = null;var count__27057_27061 = 0;var i__27058_27062 = 0;while(true){
if((i__27058_27062 < count__27057_27061))
{var node_27063 = chunk__27056_27060.cljs$core$IIndexed$_nth$arity$2(null,i__27058_27062);goog.dom.classes.remove(node_27063,class$);
{
var G__27064 = seq__27055_27059;
var G__27065 = chunk__27056_27060;
var G__27066 = count__27057_27061;
var G__27067 = (i__27058_27062 + 1);
seq__27055_27059 = G__27064;
chunk__27056_27060 = G__27065;
count__27057_27061 = G__27066;
i__27058_27062 = G__27067;
continue;
}
} else
{var temp__4092__auto___27068 = cljs.core.seq(seq__27055_27059);if(temp__4092__auto___27068)
{var seq__27055_27069__$1 = temp__4092__auto___27068;if(cljs.core.chunked_seq_QMARK_(seq__27055_27069__$1))
{var c__4148__auto___27070 = cljs.core.chunk_first(seq__27055_27069__$1);{
var G__27071 = cljs.core.chunk_rest(seq__27055_27069__$1);
var G__27072 = c__4148__auto___27070;
var G__27073 = cljs.core.count(c__4148__auto___27070);
var G__27074 = 0;
seq__27055_27059 = G__27071;
chunk__27056_27060 = G__27072;
count__27057_27061 = G__27073;
i__27058_27062 = G__27074;
continue;
}
} else
{var node_27075 = cljs.core.first(seq__27055_27069__$1);goog.dom.classes.remove(node_27075,class$);
{
var G__27076 = cljs.core.next(seq__27055_27069__$1);
var G__27077 = null;
var G__27078 = 0;
var G__27079 = 0;
seq__27055_27059 = G__27076;
chunk__27056_27060 = G__27077;
count__27057_27061 = G__27078;
i__27058_27062 = G__27079;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__27084_27088 = cljs.core.seq(domina.nodes(content));var chunk__27085_27089 = null;var count__27086_27090 = 0;var i__27087_27091 = 0;while(true){
if((i__27087_27091 < count__27086_27090))
{var node_27092 = chunk__27085_27089.cljs$core$IIndexed$_nth$arity$2(null,i__27087_27091);goog.dom.classes.toggle(node_27092,class$);
{
var G__27093 = seq__27084_27088;
var G__27094 = chunk__27085_27089;
var G__27095 = count__27086_27090;
var G__27096 = (i__27087_27091 + 1);
seq__27084_27088 = G__27093;
chunk__27085_27089 = G__27094;
count__27086_27090 = G__27095;
i__27087_27091 = G__27096;
continue;
}
} else
{var temp__4092__auto___27097 = cljs.core.seq(seq__27084_27088);if(temp__4092__auto___27097)
{var seq__27084_27098__$1 = temp__4092__auto___27097;if(cljs.core.chunked_seq_QMARK_(seq__27084_27098__$1))
{var c__4148__auto___27099 = cljs.core.chunk_first(seq__27084_27098__$1);{
var G__27100 = cljs.core.chunk_rest(seq__27084_27098__$1);
var G__27101 = c__4148__auto___27099;
var G__27102 = cljs.core.count(c__4148__auto___27099);
var G__27103 = 0;
seq__27084_27088 = G__27100;
chunk__27085_27089 = G__27101;
count__27086_27090 = G__27102;
i__27087_27091 = G__27103;
continue;
}
} else
{var node_27104 = cljs.core.first(seq__27084_27098__$1);goog.dom.classes.toggle(node_27104,class$);
{
var G__27105 = cljs.core.next(seq__27084_27098__$1);
var G__27106 = null;
var G__27107 = 0;
var G__27108 = 0;
seq__27084_27088 = G__27105;
chunk__27085_27089 = G__27106;
count__27086_27090 = G__27107;
i__27087_27091 = G__27108;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_27117__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__27113_27118 = cljs.core.seq(domina.nodes(content));var chunk__27114_27119 = null;var count__27115_27120 = 0;var i__27116_27121 = 0;while(true){
if((i__27116_27121 < count__27115_27120))
{var node_27122 = chunk__27114_27119.cljs$core$IIndexed$_nth$arity$2(null,i__27116_27121);goog.dom.classes.set(node_27122,classes_27117__$1);
{
var G__27123 = seq__27113_27118;
var G__27124 = chunk__27114_27119;
var G__27125 = count__27115_27120;
var G__27126 = (i__27116_27121 + 1);
seq__27113_27118 = G__27123;
chunk__27114_27119 = G__27124;
count__27115_27120 = G__27125;
i__27116_27121 = G__27126;
continue;
}
} else
{var temp__4092__auto___27127 = cljs.core.seq(seq__27113_27118);if(temp__4092__auto___27127)
{var seq__27113_27128__$1 = temp__4092__auto___27127;if(cljs.core.chunked_seq_QMARK_(seq__27113_27128__$1))
{var c__4148__auto___27129 = cljs.core.chunk_first(seq__27113_27128__$1);{
var G__27130 = cljs.core.chunk_rest(seq__27113_27128__$1);
var G__27131 = c__4148__auto___27129;
var G__27132 = cljs.core.count(c__4148__auto___27129);
var G__27133 = 0;
seq__27113_27118 = G__27130;
chunk__27114_27119 = G__27131;
count__27115_27120 = G__27132;
i__27116_27121 = G__27133;
continue;
}
} else
{var node_27134 = cljs.core.first(seq__27113_27128__$1);goog.dom.classes.set(node_27134,classes_27117__$1);
{
var G__27135 = cljs.core.next(seq__27113_27128__$1);
var G__27136 = null;
var G__27137 = 0;
var G__27138 = 0;
seq__27113_27118 = G__27135;
chunk__27114_27119 = G__27136;
count__27115_27120 = G__27137;
i__27116_27121 = G__27138;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__27143_27147 = cljs.core.seq(domina.nodes(content));var chunk__27144_27148 = null;var count__27145_27149 = 0;var i__27146_27150 = 0;while(true){
if((i__27146_27150 < count__27145_27149))
{var node_27151 = chunk__27144_27148.cljs$core$IIndexed$_nth$arity$2(null,i__27146_27150);goog.dom.setTextContent(node_27151,value);
{
var G__27152 = seq__27143_27147;
var G__27153 = chunk__27144_27148;
var G__27154 = count__27145_27149;
var G__27155 = (i__27146_27150 + 1);
seq__27143_27147 = G__27152;
chunk__27144_27148 = G__27153;
count__27145_27149 = G__27154;
i__27146_27150 = G__27155;
continue;
}
} else
{var temp__4092__auto___27156 = cljs.core.seq(seq__27143_27147);if(temp__4092__auto___27156)
{var seq__27143_27157__$1 = temp__4092__auto___27156;if(cljs.core.chunked_seq_QMARK_(seq__27143_27157__$1))
{var c__4148__auto___27158 = cljs.core.chunk_first(seq__27143_27157__$1);{
var G__27159 = cljs.core.chunk_rest(seq__27143_27157__$1);
var G__27160 = c__4148__auto___27158;
var G__27161 = cljs.core.count(c__4148__auto___27158);
var G__27162 = 0;
seq__27143_27147 = G__27159;
chunk__27144_27148 = G__27160;
count__27145_27149 = G__27161;
i__27146_27150 = G__27162;
continue;
}
} else
{var node_27163 = cljs.core.first(seq__27143_27157__$1);goog.dom.setTextContent(node_27163,value);
{
var G__27164 = cljs.core.next(seq__27143_27157__$1);
var G__27165 = null;
var G__27166 = 0;
var G__27167 = 0;
seq__27143_27147 = G__27164;
chunk__27144_27148 = G__27165;
count__27145_27149 = G__27166;
i__27146_27150 = G__27167;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__27172_27176 = cljs.core.seq(domina.nodes(content));var chunk__27173_27177 = null;var count__27174_27178 = 0;var i__27175_27179 = 0;while(true){
if((i__27175_27179 < count__27174_27178))
{var node_27180 = chunk__27173_27177.cljs$core$IIndexed$_nth$arity$2(null,i__27175_27179);goog.dom.forms.setValue(node_27180,value);
{
var G__27181 = seq__27172_27176;
var G__27182 = chunk__27173_27177;
var G__27183 = count__27174_27178;
var G__27184 = (i__27175_27179 + 1);
seq__27172_27176 = G__27181;
chunk__27173_27177 = G__27182;
count__27174_27178 = G__27183;
i__27175_27179 = G__27184;
continue;
}
} else
{var temp__4092__auto___27185 = cljs.core.seq(seq__27172_27176);if(temp__4092__auto___27185)
{var seq__27172_27186__$1 = temp__4092__auto___27185;if(cljs.core.chunked_seq_QMARK_(seq__27172_27186__$1))
{var c__4148__auto___27187 = cljs.core.chunk_first(seq__27172_27186__$1);{
var G__27188 = cljs.core.chunk_rest(seq__27172_27186__$1);
var G__27189 = c__4148__auto___27187;
var G__27190 = cljs.core.count(c__4148__auto___27187);
var G__27191 = 0;
seq__27172_27176 = G__27188;
chunk__27173_27177 = G__27189;
count__27174_27178 = G__27190;
i__27175_27179 = G__27191;
continue;
}
} else
{var node_27192 = cljs.core.first(seq__27172_27186__$1);goog.dom.forms.setValue(node_27192,value);
{
var G__27193 = cljs.core.next(seq__27172_27186__$1);
var G__27194 = null;
var G__27195 = 0;
var G__27196 = 0;
seq__27172_27176 = G__27193;
chunk__27173_27177 = G__27194;
count__27174_27178 = G__27195;
i__27175_27179 = G__27196;
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
{var value_27207 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__27203_27208 = cljs.core.seq(domina.nodes(content));var chunk__27204_27209 = null;var count__27205_27210 = 0;var i__27206_27211 = 0;while(true){
if((i__27206_27211 < count__27205_27210))
{var node_27212 = chunk__27204_27209.cljs$core$IIndexed$_nth$arity$2(null,i__27206_27211);node_27212.innerHTML = value_27207;
{
var G__27213 = seq__27203_27208;
var G__27214 = chunk__27204_27209;
var G__27215 = count__27205_27210;
var G__27216 = (i__27206_27211 + 1);
seq__27203_27208 = G__27213;
chunk__27204_27209 = G__27214;
count__27205_27210 = G__27215;
i__27206_27211 = G__27216;
continue;
}
} else
{var temp__4092__auto___27217 = cljs.core.seq(seq__27203_27208);if(temp__4092__auto___27217)
{var seq__27203_27218__$1 = temp__4092__auto___27217;if(cljs.core.chunked_seq_QMARK_(seq__27203_27218__$1))
{var c__4148__auto___27219 = cljs.core.chunk_first(seq__27203_27218__$1);{
var G__27220 = cljs.core.chunk_rest(seq__27203_27218__$1);
var G__27221 = c__4148__auto___27219;
var G__27222 = cljs.core.count(c__4148__auto___27219);
var G__27223 = 0;
seq__27203_27208 = G__27220;
chunk__27204_27209 = G__27221;
count__27205_27210 = G__27222;
i__27206_27211 = G__27223;
continue;
}
} else
{var node_27224 = cljs.core.first(seq__27203_27218__$1);node_27224.innerHTML = value_27207;
{
var G__27225 = cljs.core.next(seq__27203_27218__$1);
var G__27226 = null;
var G__27227 = 0;
var G__27228 = 0;
seq__27203_27208 = G__27225;
chunk__27204_27209 = G__27226;
count__27205_27210 = G__27227;
i__27206_27211 = G__27228;
continue;
}
}
} else
{}
}
break;
}
}catch (e27202){if((e27202 instanceof Error))
{var e_27229 = e27202;domina.replace_children_BANG_(content,value_27207);
} else
{if(cljs.core.constant$keyword$210)
{throw e27202;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__27236_27240 = cljs.core.seq(children);var chunk__27237_27241 = null;var count__27238_27242 = 0;var i__27239_27243 = 0;while(true){
if((i__27239_27243 < count__27238_27242))
{var child_27244 = chunk__27237_27241.cljs$core$IIndexed$_nth$arity$2(null,i__27239_27243);frag.appendChild(child_27244);
{
var G__27245 = seq__27236_27240;
var G__27246 = chunk__27237_27241;
var G__27247 = count__27238_27242;
var G__27248 = (i__27239_27243 + 1);
seq__27236_27240 = G__27245;
chunk__27237_27241 = G__27246;
count__27238_27242 = G__27247;
i__27239_27243 = G__27248;
continue;
}
} else
{var temp__4092__auto___27249 = cljs.core.seq(seq__27236_27240);if(temp__4092__auto___27249)
{var seq__27236_27250__$1 = temp__4092__auto___27249;if(cljs.core.chunked_seq_QMARK_(seq__27236_27250__$1))
{var c__4148__auto___27251 = cljs.core.chunk_first(seq__27236_27250__$1);{
var G__27252 = cljs.core.chunk_rest(seq__27236_27250__$1);
var G__27253 = c__4148__auto___27251;
var G__27254 = cljs.core.count(c__4148__auto___27251);
var G__27255 = 0;
seq__27236_27240 = G__27252;
chunk__27237_27241 = G__27253;
count__27238_27242 = G__27254;
i__27239_27243 = G__27255;
continue;
}
} else
{var child_27256 = cljs.core.first(seq__27236_27250__$1);frag.appendChild(child_27256);
{
var G__27257 = cljs.core.next(seq__27236_27250__$1);
var G__27258 = null;
var G__27259 = 0;
var G__27260 = 0;
seq__27236_27240 = G__27257;
chunk__27237_27241 = G__27258;
count__27238_27242 = G__27259;
i__27239_27243 = G__27260;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__27230_SHARP_,p2__27231_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__27230_SHARP_,p2__27231_SHARP_) : f.call(null,p1__27230_SHARP_,p2__27231_SHARP_));
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
{if((function (){var G__27262 = list_thing;if(G__27262)
{var bit__4050__auto__ = (G__27262.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27262.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27262.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27262);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27262);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$211)
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
{if((function (){var G__27263 = content;if(G__27263)
{var bit__4050__auto__ = (G__27263.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27263.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27263.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27263);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27263);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$211)
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
{if((function (){var G__27264 = content;if(G__27264)
{var bit__4050__auto__ = (G__27264.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__27264.cljs$core$ISeqable$))
{return true;
} else
{if((!G__27264.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27264);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__27264);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$211)
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
