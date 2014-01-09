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
var opt_wrapper_23828 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_23829 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_23830 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",cljs.core.constant$keyword$113,"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_23829,table_section_wrapper_23829,opt_wrapper_23828,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_23830,table_section_wrapper_23829,cell_wrapper_23830,opt_wrapper_23828,table_section_wrapper_23829,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_23829]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));var tbody = (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__23835 = cljs.core.seq(tbody);var chunk__23836 = null;var count__23837 = 0;var i__23838 = 0;while(true){
if((i__23838 < count__23837))
{var child = chunk__23836.cljs$core$IIndexed$_nth$arity$2(null,i__23838);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23839 = seq__23835;
var G__23840 = chunk__23836;
var G__23841 = count__23837;
var G__23842 = (i__23838 + 1);
seq__23835 = G__23839;
chunk__23836 = G__23840;
count__23837 = G__23841;
i__23838 = G__23842;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__23835);if(temp__4092__auto__)
{var seq__23835__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__23835__$1))
{var c__4148__auto__ = cljs.core.chunk_first(seq__23835__$1);{
var G__23843 = cljs.core.chunk_rest(seq__23835__$1);
var G__23844 = c__4148__auto__;
var G__23845 = cljs.core.count(c__4148__auto__);
var G__23846 = 0;
seq__23835 = G__23843;
chunk__23836 = G__23844;
count__23837 = G__23845;
i__23838 = G__23846;
continue;
}
} else
{var child = cljs.core.first(seq__23835__$1);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__23847 = cljs.core.next(seq__23835__$1);
var G__23848 = null;
var G__23849 = 0;
var G__23850 = 0;
seq__23835 = G__23847;
chunk__23836 = G__23848;
count__23837 = G__23849;
i__23838 = G__23850;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__23852 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,0,null);var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,1,null);var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23852,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__23853 = wrapper.lastChild;
var G__23854 = (level - 1);
wrapper = G__23853;
level = G__23854;
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
domina.DomContent = (function (){var obj23856 = {};return obj23856;
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
log_debug.cljs$lang$applyTo = (function (arglist__23857){
var mesg = cljs.core.seq(arglist__23857);
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
log.cljs$lang$applyTo = (function (arglist__23858){
var mesg = cljs.core.seq(arglist__23858);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__23859){
var contents = cljs.core.seq(arglist__23859);
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
domina.clone = (function clone(content){return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23860_SHARP_){return p1__23860_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23861_SHARP_,p2__23862_SHARP_){return goog.dom.insertChildAt(p1__23861_SHARP_,p2__23862_SHARP_,idx);
}),parent_content,child_content) : domina.apply_with_cloning.call(null,(function (p1__23861_SHARP_,p2__23862_SHARP_){return goog.dom.insertChildAt(p1__23861_SHARP_,p2__23862_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23864_SHARP_,p2__23863_SHARP_){return goog.dom.insertSiblingBefore(p2__23863_SHARP_,p1__23864_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23864_SHARP_,p2__23863_SHARP_){return goog.dom.insertSiblingBefore(p2__23863_SHARP_,p1__23864_SHARP_);
}),content,new_content));
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23866_SHARP_,p2__23865_SHARP_){return goog.dom.insertSiblingAfter(p2__23865_SHARP_,p1__23866_SHARP_);
}),content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23866_SHARP_,p2__23865_SHARP_){return goog.dom.insertSiblingAfter(p2__23865_SHARP_,p1__23866_SHARP_);
}),content,new_content));
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3((function (p1__23868_SHARP_,p2__23867_SHARP_){return goog.dom.replaceNode(p2__23867_SHARP_,p1__23868_SHARP_);
}),old_content,new_content) : domina.apply_with_cloning.call(null,(function (p1__23868_SHARP_,p2__23867_SHARP_){return goog.dom.replaceNode(p2__23867_SHARP_,p1__23868_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__23873_23877 = cljs.core.seq(domina.nodes(content));var chunk__23874_23878 = null;var count__23875_23879 = 0;var i__23876_23880 = 0;while(true){
if((i__23876_23880 < count__23875_23879))
{var n_23881 = chunk__23874_23878.cljs$core$IIndexed$_nth$arity$2(null,i__23876_23880);goog.style.setStyle(n_23881,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23882 = seq__23873_23877;
var G__23883 = chunk__23874_23878;
var G__23884 = count__23875_23879;
var G__23885 = (i__23876_23880 + 1);
seq__23873_23877 = G__23882;
chunk__23874_23878 = G__23883;
count__23875_23879 = G__23884;
i__23876_23880 = G__23885;
continue;
}
} else
{var temp__4092__auto___23886 = cljs.core.seq(seq__23873_23877);if(temp__4092__auto___23886)
{var seq__23873_23887__$1 = temp__4092__auto___23886;if(cljs.core.chunked_seq_QMARK_(seq__23873_23887__$1))
{var c__4148__auto___23888 = cljs.core.chunk_first(seq__23873_23887__$1);{
var G__23889 = cljs.core.chunk_rest(seq__23873_23887__$1);
var G__23890 = c__4148__auto___23888;
var G__23891 = cljs.core.count(c__4148__auto___23888);
var G__23892 = 0;
seq__23873_23877 = G__23889;
chunk__23874_23878 = G__23890;
count__23875_23879 = G__23891;
i__23876_23880 = G__23892;
continue;
}
} else
{var n_23893 = cljs.core.first(seq__23873_23887__$1);goog.style.setStyle(n_23893,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23894 = cljs.core.next(seq__23873_23887__$1);
var G__23895 = null;
var G__23896 = 0;
var G__23897 = 0;
seq__23873_23877 = G__23894;
chunk__23874_23878 = G__23895;
count__23875_23879 = G__23896;
i__23876_23880 = G__23897;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__23898){
var content = cljs.core.first(arglist__23898);
arglist__23898 = cljs.core.next(arglist__23898);
var name = cljs.core.first(arglist__23898);
var value = cljs.core.rest(arglist__23898);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__23903_23907 = cljs.core.seq(domina.nodes(content));var chunk__23904_23908 = null;var count__23905_23909 = 0;var i__23906_23910 = 0;while(true){
if((i__23906_23910 < count__23905_23909))
{var n_23911 = chunk__23904_23908.cljs$core$IIndexed$_nth$arity$2(null,i__23906_23910);n_23911.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23912 = seq__23903_23907;
var G__23913 = chunk__23904_23908;
var G__23914 = count__23905_23909;
var G__23915 = (i__23906_23910 + 1);
seq__23903_23907 = G__23912;
chunk__23904_23908 = G__23913;
count__23905_23909 = G__23914;
i__23906_23910 = G__23915;
continue;
}
} else
{var temp__4092__auto___23916 = cljs.core.seq(seq__23903_23907);if(temp__4092__auto___23916)
{var seq__23903_23917__$1 = temp__4092__auto___23916;if(cljs.core.chunked_seq_QMARK_(seq__23903_23917__$1))
{var c__4148__auto___23918 = cljs.core.chunk_first(seq__23903_23917__$1);{
var G__23919 = cljs.core.chunk_rest(seq__23903_23917__$1);
var G__23920 = c__4148__auto___23918;
var G__23921 = cljs.core.count(c__4148__auto___23918);
var G__23922 = 0;
seq__23903_23907 = G__23919;
chunk__23904_23908 = G__23920;
count__23905_23909 = G__23921;
i__23906_23910 = G__23922;
continue;
}
} else
{var n_23923 = cljs.core.first(seq__23903_23917__$1);n_23923.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));
{
var G__23924 = cljs.core.next(seq__23903_23917__$1);
var G__23925 = null;
var G__23926 = 0;
var G__23927 = 0;
seq__23903_23907 = G__23924;
chunk__23904_23908 = G__23925;
count__23905_23909 = G__23926;
i__23906_23910 = G__23927;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__23928){
var content = cljs.core.first(arglist__23928);
arglist__23928 = cljs.core.next(arglist__23928);
var name = cljs.core.first(arglist__23928);
var value = cljs.core.rest(arglist__23928);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__23933_23937 = cljs.core.seq(domina.nodes(content));var chunk__23934_23938 = null;var count__23935_23939 = 0;var i__23936_23940 = 0;while(true){
if((i__23936_23940 < count__23935_23939))
{var n_23941 = chunk__23934_23938.cljs$core$IIndexed$_nth$arity$2(null,i__23936_23940);n_23941.removeAttribute(cljs.core.name(name));
{
var G__23942 = seq__23933_23937;
var G__23943 = chunk__23934_23938;
var G__23944 = count__23935_23939;
var G__23945 = (i__23936_23940 + 1);
seq__23933_23937 = G__23942;
chunk__23934_23938 = G__23943;
count__23935_23939 = G__23944;
i__23936_23940 = G__23945;
continue;
}
} else
{var temp__4092__auto___23946 = cljs.core.seq(seq__23933_23937);if(temp__4092__auto___23946)
{var seq__23933_23947__$1 = temp__4092__auto___23946;if(cljs.core.chunked_seq_QMARK_(seq__23933_23947__$1))
{var c__4148__auto___23948 = cljs.core.chunk_first(seq__23933_23947__$1);{
var G__23949 = cljs.core.chunk_rest(seq__23933_23947__$1);
var G__23950 = c__4148__auto___23948;
var G__23951 = cljs.core.count(c__4148__auto___23948);
var G__23952 = 0;
seq__23933_23937 = G__23949;
chunk__23934_23938 = G__23950;
count__23935_23939 = G__23951;
i__23936_23940 = G__23952;
continue;
}
} else
{var n_23953 = cljs.core.first(seq__23933_23947__$1);n_23953.removeAttribute(cljs.core.name(name));
{
var G__23954 = cljs.core.next(seq__23933_23947__$1);
var G__23955 = null;
var G__23956 = 0;
var G__23957 = 0;
seq__23933_23937 = G__23954;
chunk__23934_23938 = G__23955;
count__23935_23939 = G__23956;
i__23936_23940 = G__23957;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){var vec__23959 = pair.split(/\s*:\s*/);var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23959,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23959,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
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
{if(cljs.core.constant$keyword$112)
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
domina.attrs = (function attrs(content){var node = domina.single_node(content);var attrs__$1 = node.attributes;return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23960_SHARP_){var attr = attrs__$1.item(p1__23960_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__23967_23973 = cljs.core.seq(styles);var chunk__23968_23974 = null;var count__23969_23975 = 0;var i__23970_23976 = 0;while(true){
if((i__23970_23976 < count__23969_23975))
{var vec__23971_23977 = chunk__23968_23974.cljs$core$IIndexed$_nth$arity$2(null,i__23970_23976);var name_23978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971_23977,0,null);var value_23979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971_23977,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23978,cljs.core.array_seq([value_23979], 0));
{
var G__23980 = seq__23967_23973;
var G__23981 = chunk__23968_23974;
var G__23982 = count__23969_23975;
var G__23983 = (i__23970_23976 + 1);
seq__23967_23973 = G__23980;
chunk__23968_23974 = G__23981;
count__23969_23975 = G__23982;
i__23970_23976 = G__23983;
continue;
}
} else
{var temp__4092__auto___23984 = cljs.core.seq(seq__23967_23973);if(temp__4092__auto___23984)
{var seq__23967_23985__$1 = temp__4092__auto___23984;if(cljs.core.chunked_seq_QMARK_(seq__23967_23985__$1))
{var c__4148__auto___23986 = cljs.core.chunk_first(seq__23967_23985__$1);{
var G__23987 = cljs.core.chunk_rest(seq__23967_23985__$1);
var G__23988 = c__4148__auto___23986;
var G__23989 = cljs.core.count(c__4148__auto___23986);
var G__23990 = 0;
seq__23967_23973 = G__23987;
chunk__23968_23974 = G__23988;
count__23969_23975 = G__23989;
i__23970_23976 = G__23990;
continue;
}
} else
{var vec__23972_23991 = cljs.core.first(seq__23967_23985__$1);var name_23992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23972_23991,0,null);var value_23993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23972_23991,1,null);domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_23992,cljs.core.array_seq([value_23993], 0));
{
var G__23994 = cljs.core.next(seq__23967_23985__$1);
var G__23995 = null;
var G__23996 = 0;
var G__23997 = 0;
seq__23967_23973 = G__23994;
chunk__23968_23974 = G__23995;
count__23969_23975 = G__23996;
i__23970_23976 = G__23997;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__24004_24010 = cljs.core.seq(attrs);var chunk__24005_24011 = null;var count__24006_24012 = 0;var i__24007_24013 = 0;while(true){
if((i__24007_24013 < count__24006_24012))
{var vec__24008_24014 = chunk__24005_24011.cljs$core$IIndexed$_nth$arity$2(null,i__24007_24013);var name_24015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008_24014,0,null);var value_24016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24008_24014,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24015,cljs.core.array_seq([value_24016], 0));
{
var G__24017 = seq__24004_24010;
var G__24018 = chunk__24005_24011;
var G__24019 = count__24006_24012;
var G__24020 = (i__24007_24013 + 1);
seq__24004_24010 = G__24017;
chunk__24005_24011 = G__24018;
count__24006_24012 = G__24019;
i__24007_24013 = G__24020;
continue;
}
} else
{var temp__4092__auto___24021 = cljs.core.seq(seq__24004_24010);if(temp__4092__auto___24021)
{var seq__24004_24022__$1 = temp__4092__auto___24021;if(cljs.core.chunked_seq_QMARK_(seq__24004_24022__$1))
{var c__4148__auto___24023 = cljs.core.chunk_first(seq__24004_24022__$1);{
var G__24024 = cljs.core.chunk_rest(seq__24004_24022__$1);
var G__24025 = c__4148__auto___24023;
var G__24026 = cljs.core.count(c__4148__auto___24023);
var G__24027 = 0;
seq__24004_24010 = G__24024;
chunk__24005_24011 = G__24025;
count__24006_24012 = G__24026;
i__24007_24013 = G__24027;
continue;
}
} else
{var vec__24009_24028 = cljs.core.first(seq__24004_24022__$1);var name_24029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_24028,0,null);var value_24030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24009_24028,1,null);domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_24029,cljs.core.array_seq([value_24030], 0));
{
var G__24031 = cljs.core.next(seq__24004_24022__$1);
var G__24032 = null;
var G__24033 = 0;
var G__24034 = 0;
seq__24004_24010 = G__24031;
chunk__24005_24011 = G__24032;
count__24006_24012 = G__24033;
i__24007_24013 = G__24034;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__24039_24043 = cljs.core.seq(domina.nodes(content));var chunk__24040_24044 = null;var count__24041_24045 = 0;var i__24042_24046 = 0;while(true){
if((i__24042_24046 < count__24041_24045))
{var node_24047 = chunk__24040_24044.cljs$core$IIndexed$_nth$arity$2(null,i__24042_24046);goog.dom.classes.add(node_24047,class$);
{
var G__24048 = seq__24039_24043;
var G__24049 = chunk__24040_24044;
var G__24050 = count__24041_24045;
var G__24051 = (i__24042_24046 + 1);
seq__24039_24043 = G__24048;
chunk__24040_24044 = G__24049;
count__24041_24045 = G__24050;
i__24042_24046 = G__24051;
continue;
}
} else
{var temp__4092__auto___24052 = cljs.core.seq(seq__24039_24043);if(temp__4092__auto___24052)
{var seq__24039_24053__$1 = temp__4092__auto___24052;if(cljs.core.chunked_seq_QMARK_(seq__24039_24053__$1))
{var c__4148__auto___24054 = cljs.core.chunk_first(seq__24039_24053__$1);{
var G__24055 = cljs.core.chunk_rest(seq__24039_24053__$1);
var G__24056 = c__4148__auto___24054;
var G__24057 = cljs.core.count(c__4148__auto___24054);
var G__24058 = 0;
seq__24039_24043 = G__24055;
chunk__24040_24044 = G__24056;
count__24041_24045 = G__24057;
i__24042_24046 = G__24058;
continue;
}
} else
{var node_24059 = cljs.core.first(seq__24039_24053__$1);goog.dom.classes.add(node_24059,class$);
{
var G__24060 = cljs.core.next(seq__24039_24053__$1);
var G__24061 = null;
var G__24062 = 0;
var G__24063 = 0;
seq__24039_24043 = G__24060;
chunk__24040_24044 = G__24061;
count__24041_24045 = G__24062;
i__24042_24046 = G__24063;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__24068_24072 = cljs.core.seq(domina.nodes(content));var chunk__24069_24073 = null;var count__24070_24074 = 0;var i__24071_24075 = 0;while(true){
if((i__24071_24075 < count__24070_24074))
{var node_24076 = chunk__24069_24073.cljs$core$IIndexed$_nth$arity$2(null,i__24071_24075);goog.dom.classes.remove(node_24076,class$);
{
var G__24077 = seq__24068_24072;
var G__24078 = chunk__24069_24073;
var G__24079 = count__24070_24074;
var G__24080 = (i__24071_24075 + 1);
seq__24068_24072 = G__24077;
chunk__24069_24073 = G__24078;
count__24070_24074 = G__24079;
i__24071_24075 = G__24080;
continue;
}
} else
{var temp__4092__auto___24081 = cljs.core.seq(seq__24068_24072);if(temp__4092__auto___24081)
{var seq__24068_24082__$1 = temp__4092__auto___24081;if(cljs.core.chunked_seq_QMARK_(seq__24068_24082__$1))
{var c__4148__auto___24083 = cljs.core.chunk_first(seq__24068_24082__$1);{
var G__24084 = cljs.core.chunk_rest(seq__24068_24082__$1);
var G__24085 = c__4148__auto___24083;
var G__24086 = cljs.core.count(c__4148__auto___24083);
var G__24087 = 0;
seq__24068_24072 = G__24084;
chunk__24069_24073 = G__24085;
count__24070_24074 = G__24086;
i__24071_24075 = G__24087;
continue;
}
} else
{var node_24088 = cljs.core.first(seq__24068_24082__$1);goog.dom.classes.remove(node_24088,class$);
{
var G__24089 = cljs.core.next(seq__24068_24082__$1);
var G__24090 = null;
var G__24091 = 0;
var G__24092 = 0;
seq__24068_24072 = G__24089;
chunk__24069_24073 = G__24090;
count__24070_24074 = G__24091;
i__24071_24075 = G__24092;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__24097_24101 = cljs.core.seq(domina.nodes(content));var chunk__24098_24102 = null;var count__24099_24103 = 0;var i__24100_24104 = 0;while(true){
if((i__24100_24104 < count__24099_24103))
{var node_24105 = chunk__24098_24102.cljs$core$IIndexed$_nth$arity$2(null,i__24100_24104);goog.dom.classes.toggle(node_24105,class$);
{
var G__24106 = seq__24097_24101;
var G__24107 = chunk__24098_24102;
var G__24108 = count__24099_24103;
var G__24109 = (i__24100_24104 + 1);
seq__24097_24101 = G__24106;
chunk__24098_24102 = G__24107;
count__24099_24103 = G__24108;
i__24100_24104 = G__24109;
continue;
}
} else
{var temp__4092__auto___24110 = cljs.core.seq(seq__24097_24101);if(temp__4092__auto___24110)
{var seq__24097_24111__$1 = temp__4092__auto___24110;if(cljs.core.chunked_seq_QMARK_(seq__24097_24111__$1))
{var c__4148__auto___24112 = cljs.core.chunk_first(seq__24097_24111__$1);{
var G__24113 = cljs.core.chunk_rest(seq__24097_24111__$1);
var G__24114 = c__4148__auto___24112;
var G__24115 = cljs.core.count(c__4148__auto___24112);
var G__24116 = 0;
seq__24097_24101 = G__24113;
chunk__24098_24102 = G__24114;
count__24099_24103 = G__24115;
i__24100_24104 = G__24116;
continue;
}
} else
{var node_24117 = cljs.core.first(seq__24097_24111__$1);goog.dom.classes.toggle(node_24117,class$);
{
var G__24118 = cljs.core.next(seq__24097_24111__$1);
var G__24119 = null;
var G__24120 = 0;
var G__24121 = 0;
seq__24097_24101 = G__24118;
chunk__24098_24102 = G__24119;
count__24099_24103 = G__24120;
i__24100_24104 = G__24121;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_24130__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);var seq__24126_24131 = cljs.core.seq(domina.nodes(content));var chunk__24127_24132 = null;var count__24128_24133 = 0;var i__24129_24134 = 0;while(true){
if((i__24129_24134 < count__24128_24133))
{var node_24135 = chunk__24127_24132.cljs$core$IIndexed$_nth$arity$2(null,i__24129_24134);goog.dom.classes.set(node_24135,classes_24130__$1);
{
var G__24136 = seq__24126_24131;
var G__24137 = chunk__24127_24132;
var G__24138 = count__24128_24133;
var G__24139 = (i__24129_24134 + 1);
seq__24126_24131 = G__24136;
chunk__24127_24132 = G__24137;
count__24128_24133 = G__24138;
i__24129_24134 = G__24139;
continue;
}
} else
{var temp__4092__auto___24140 = cljs.core.seq(seq__24126_24131);if(temp__4092__auto___24140)
{var seq__24126_24141__$1 = temp__4092__auto___24140;if(cljs.core.chunked_seq_QMARK_(seq__24126_24141__$1))
{var c__4148__auto___24142 = cljs.core.chunk_first(seq__24126_24141__$1);{
var G__24143 = cljs.core.chunk_rest(seq__24126_24141__$1);
var G__24144 = c__4148__auto___24142;
var G__24145 = cljs.core.count(c__4148__auto___24142);
var G__24146 = 0;
seq__24126_24131 = G__24143;
chunk__24127_24132 = G__24144;
count__24128_24133 = G__24145;
i__24129_24134 = G__24146;
continue;
}
} else
{var node_24147 = cljs.core.first(seq__24126_24141__$1);goog.dom.classes.set(node_24147,classes_24130__$1);
{
var G__24148 = cljs.core.next(seq__24126_24141__$1);
var G__24149 = null;
var G__24150 = 0;
var G__24151 = 0;
seq__24126_24131 = G__24148;
chunk__24127_24132 = G__24149;
count__24128_24133 = G__24150;
i__24129_24134 = G__24151;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__24156_24160 = cljs.core.seq(domina.nodes(content));var chunk__24157_24161 = null;var count__24158_24162 = 0;var i__24159_24163 = 0;while(true){
if((i__24159_24163 < count__24158_24162))
{var node_24164 = chunk__24157_24161.cljs$core$IIndexed$_nth$arity$2(null,i__24159_24163);goog.dom.setTextContent(node_24164,value);
{
var G__24165 = seq__24156_24160;
var G__24166 = chunk__24157_24161;
var G__24167 = count__24158_24162;
var G__24168 = (i__24159_24163 + 1);
seq__24156_24160 = G__24165;
chunk__24157_24161 = G__24166;
count__24158_24162 = G__24167;
i__24159_24163 = G__24168;
continue;
}
} else
{var temp__4092__auto___24169 = cljs.core.seq(seq__24156_24160);if(temp__4092__auto___24169)
{var seq__24156_24170__$1 = temp__4092__auto___24169;if(cljs.core.chunked_seq_QMARK_(seq__24156_24170__$1))
{var c__4148__auto___24171 = cljs.core.chunk_first(seq__24156_24170__$1);{
var G__24172 = cljs.core.chunk_rest(seq__24156_24170__$1);
var G__24173 = c__4148__auto___24171;
var G__24174 = cljs.core.count(c__4148__auto___24171);
var G__24175 = 0;
seq__24156_24160 = G__24172;
chunk__24157_24161 = G__24173;
count__24158_24162 = G__24174;
i__24159_24163 = G__24175;
continue;
}
} else
{var node_24176 = cljs.core.first(seq__24156_24170__$1);goog.dom.setTextContent(node_24176,value);
{
var G__24177 = cljs.core.next(seq__24156_24170__$1);
var G__24178 = null;
var G__24179 = 0;
var G__24180 = 0;
seq__24156_24160 = G__24177;
chunk__24157_24161 = G__24178;
count__24158_24162 = G__24179;
i__24159_24163 = G__24180;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__24185_24189 = cljs.core.seq(domina.nodes(content));var chunk__24186_24190 = null;var count__24187_24191 = 0;var i__24188_24192 = 0;while(true){
if((i__24188_24192 < count__24187_24191))
{var node_24193 = chunk__24186_24190.cljs$core$IIndexed$_nth$arity$2(null,i__24188_24192);goog.dom.forms.setValue(node_24193,value);
{
var G__24194 = seq__24185_24189;
var G__24195 = chunk__24186_24190;
var G__24196 = count__24187_24191;
var G__24197 = (i__24188_24192 + 1);
seq__24185_24189 = G__24194;
chunk__24186_24190 = G__24195;
count__24187_24191 = G__24196;
i__24188_24192 = G__24197;
continue;
}
} else
{var temp__4092__auto___24198 = cljs.core.seq(seq__24185_24189);if(temp__4092__auto___24198)
{var seq__24185_24199__$1 = temp__4092__auto___24198;if(cljs.core.chunked_seq_QMARK_(seq__24185_24199__$1))
{var c__4148__auto___24200 = cljs.core.chunk_first(seq__24185_24199__$1);{
var G__24201 = cljs.core.chunk_rest(seq__24185_24199__$1);
var G__24202 = c__4148__auto___24200;
var G__24203 = cljs.core.count(c__4148__auto___24200);
var G__24204 = 0;
seq__24185_24189 = G__24201;
chunk__24186_24190 = G__24202;
count__24187_24191 = G__24203;
i__24188_24192 = G__24204;
continue;
}
} else
{var node_24205 = cljs.core.first(seq__24185_24199__$1);goog.dom.forms.setValue(node_24205,value);
{
var G__24206 = cljs.core.next(seq__24185_24199__$1);
var G__24207 = null;
var G__24208 = 0;
var G__24209 = 0;
seq__24185_24189 = G__24206;
chunk__24186_24190 = G__24207;
count__24187_24191 = G__24208;
i__24188_24192 = G__24209;
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
{var value_24220 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__24216_24221 = cljs.core.seq(domina.nodes(content));var chunk__24217_24222 = null;var count__24218_24223 = 0;var i__24219_24224 = 0;while(true){
if((i__24219_24224 < count__24218_24223))
{var node_24225 = chunk__24217_24222.cljs$core$IIndexed$_nth$arity$2(null,i__24219_24224);node_24225.innerHTML = value_24220;
{
var G__24226 = seq__24216_24221;
var G__24227 = chunk__24217_24222;
var G__24228 = count__24218_24223;
var G__24229 = (i__24219_24224 + 1);
seq__24216_24221 = G__24226;
chunk__24217_24222 = G__24227;
count__24218_24223 = G__24228;
i__24219_24224 = G__24229;
continue;
}
} else
{var temp__4092__auto___24230 = cljs.core.seq(seq__24216_24221);if(temp__4092__auto___24230)
{var seq__24216_24231__$1 = temp__4092__auto___24230;if(cljs.core.chunked_seq_QMARK_(seq__24216_24231__$1))
{var c__4148__auto___24232 = cljs.core.chunk_first(seq__24216_24231__$1);{
var G__24233 = cljs.core.chunk_rest(seq__24216_24231__$1);
var G__24234 = c__4148__auto___24232;
var G__24235 = cljs.core.count(c__4148__auto___24232);
var G__24236 = 0;
seq__24216_24221 = G__24233;
chunk__24217_24222 = G__24234;
count__24218_24223 = G__24235;
i__24219_24224 = G__24236;
continue;
}
} else
{var node_24237 = cljs.core.first(seq__24216_24231__$1);node_24237.innerHTML = value_24220;
{
var G__24238 = cljs.core.next(seq__24216_24231__$1);
var G__24239 = null;
var G__24240 = 0;
var G__24241 = 0;
seq__24216_24221 = G__24238;
chunk__24217_24222 = G__24239;
count__24218_24223 = G__24240;
i__24219_24224 = G__24241;
continue;
}
}
} else
{}
}
break;
}
}catch (e24215){if((e24215 instanceof Error))
{var e_24242 = e24215;domina.replace_children_BANG_(content,value_24220);
} else
{if(cljs.core.constant$keyword$112)
{throw e24215;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes(parent_content);var children = domina.nodes(child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__24249_24253 = cljs.core.seq(children);var chunk__24250_24254 = null;var count__24251_24255 = 0;var i__24252_24256 = 0;while(true){
if((i__24252_24256 < count__24251_24255))
{var child_24257 = chunk__24250_24254.cljs$core$IIndexed$_nth$arity$2(null,i__24252_24256);frag.appendChild(child_24257);
{
var G__24258 = seq__24249_24253;
var G__24259 = chunk__24250_24254;
var G__24260 = count__24251_24255;
var G__24261 = (i__24252_24256 + 1);
seq__24249_24253 = G__24258;
chunk__24250_24254 = G__24259;
count__24251_24255 = G__24260;
i__24252_24256 = G__24261;
continue;
}
} else
{var temp__4092__auto___24262 = cljs.core.seq(seq__24249_24253);if(temp__4092__auto___24262)
{var seq__24249_24263__$1 = temp__4092__auto___24262;if(cljs.core.chunked_seq_QMARK_(seq__24249_24263__$1))
{var c__4148__auto___24264 = cljs.core.chunk_first(seq__24249_24263__$1);{
var G__24265 = cljs.core.chunk_rest(seq__24249_24263__$1);
var G__24266 = c__4148__auto___24264;
var G__24267 = cljs.core.count(c__4148__auto___24264);
var G__24268 = 0;
seq__24249_24253 = G__24265;
chunk__24250_24254 = G__24266;
count__24251_24255 = G__24267;
i__24252_24256 = G__24268;
continue;
}
} else
{var child_24269 = cljs.core.first(seq__24249_24263__$1);frag.appendChild(child_24269);
{
var G__24270 = cljs.core.next(seq__24249_24263__$1);
var G__24271 = null;
var G__24272 = 0;
var G__24273 = 0;
seq__24249_24253 = G__24270;
chunk__24250_24254 = G__24271;
count__24251_24255 = G__24272;
i__24252_24256 = G__24273;
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
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__24243_SHARP_,p2__24244_SHARP_){return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__24243_SHARP_,p2__24244_SHARP_) : f.call(null,p1__24243_SHARP_,p2__24244_SHARP_));
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
{if((function (){var G__24275 = list_thing;if(G__24275)
{var bit__4050__auto__ = (G__24275.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24275.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24275.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24275);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24275);
}
})())
{return cljs.core.seq(list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(list_thing)))
{return domina.lazy_nodelist(list_thing);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24276 = content;if(G__24276)
{var bit__4050__auto__ = (G__24276.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24276.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24276.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24276);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24276);
}
})())
{return cljs.core.seq(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return domina.lazy_nodelist(content);
} else
{if(cljs.core.constant$keyword$113)
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
{if((function (){var G__24277 = content;if(G__24277)
{var bit__4050__auto__ = (G__24277.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__24277.cljs$core$ISeqable$))
{return true;
} else
{if((!G__24277.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24277);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__24277);
}
})())
{return cljs.core.first(content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_(content)))
{return content.item(0);
} else
{if(cljs.core.constant$keyword$113)
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
