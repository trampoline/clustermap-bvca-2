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
var opt_wrapper_15866 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_15867 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_15868 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_15867,table_section_wrapper_15867,opt_wrapper_15866,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_15868,table_section_wrapper_15867,cell_wrapper_15868,opt_wrapper_15866,table_section_wrapper_15867,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_15867]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3394__auto__ = div.firstChild;if(cljs.core.truth_(and__3394__auto__))
{return div.firstChild.childNodes;
} else
{return and__3394__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__15873 = cljs.core.seq.call(null,tbody);var chunk__15874 = null;var count__15875 = 0;var i__15876 = 0;while(true){
if((i__15876 < count__15875))
{var child = cljs.core._nth.call(null,chunk__15874,i__15876);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15877 = seq__15873;
var G__15878 = chunk__15874;
var G__15879 = count__15875;
var G__15880 = (i__15876 + 1);
seq__15873 = G__15877;
chunk__15874 = G__15878;
count__15875 = G__15879;
i__15876 = G__15880;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15873);if(temp__4092__auto__)
{var seq__15873__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15873__$1))
{var c__4148__auto__ = cljs.core.chunk_first.call(null,seq__15873__$1);{
var G__15881 = cljs.core.chunk_rest.call(null,seq__15873__$1);
var G__15882 = c__4148__auto__;
var G__15883 = cljs.core.count.call(null,c__4148__auto__);
var G__15884 = 0;
seq__15873 = G__15881;
chunk__15874 = G__15882;
count__15875 = G__15883;
i__15876 = G__15884;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__15873__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__15885 = cljs.core.next.call(null,seq__15873__$1);
var G__15886 = null;
var G__15887 = 0;
var G__15888 = 0;
seq__15873 = G__15885;
chunk__15874 = G__15886;
count__15875 = G__15887;
i__15876 = G__15888;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__15890 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__15890,0,null);var start_wrap = cljs.core.nth.call(null,vec__15890,1,null);var end_wrap = cljs.core.nth.call(null,vec__15890,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__15891 = wrapper.lastChild;
var G__15892 = (level - 1);
wrapper = G__15891;
level = G__15892;
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
if(cljs.core.truth_((function (){var and__3394__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3394__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3394__auto__;
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
domina.DomContent = (function (){var obj15894 = {};return obj15894;
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
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3394__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3394__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3394__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__15895){
var mesg = cljs.core.seq(arglist__15895);
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
log.cljs$lang$applyTo = (function (arglist__15896){
var mesg = cljs.core.seq(arglist__15896);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__15897){
var contents = cljs.core.seq(arglist__15897);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__15898_SHARP_){return p1__15898_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__15899_SHARP_,p2__15900_SHARP_){return goog.dom.insertChildAt(p1__15899_SHARP_,p2__15900_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15902_SHARP_,p2__15901_SHARP_){return goog.dom.insertSiblingBefore(p2__15901_SHARP_,p1__15902_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__15904_SHARP_,p2__15903_SHARP_){return goog.dom.insertSiblingAfter(p2__15903_SHARP_,p1__15904_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__15906_SHARP_,p2__15905_SHARP_){return goog.dom.replaceNode(p2__15905_SHARP_,p1__15906_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__15911_15915 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15912_15916 = null;var count__15913_15917 = 0;var i__15914_15918 = 0;while(true){
if((i__15914_15918 < count__15913_15917))
{var n_15919 = cljs.core._nth.call(null,chunk__15912_15916,i__15914_15918);goog.style.setStyle(n_15919,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15920 = seq__15911_15915;
var G__15921 = chunk__15912_15916;
var G__15922 = count__15913_15917;
var G__15923 = (i__15914_15918 + 1);
seq__15911_15915 = G__15920;
chunk__15912_15916 = G__15921;
count__15913_15917 = G__15922;
i__15914_15918 = G__15923;
continue;
}
} else
{var temp__4092__auto___15924 = cljs.core.seq.call(null,seq__15911_15915);if(temp__4092__auto___15924)
{var seq__15911_15925__$1 = temp__4092__auto___15924;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15911_15925__$1))
{var c__4148__auto___15926 = cljs.core.chunk_first.call(null,seq__15911_15925__$1);{
var G__15927 = cljs.core.chunk_rest.call(null,seq__15911_15925__$1);
var G__15928 = c__4148__auto___15926;
var G__15929 = cljs.core.count.call(null,c__4148__auto___15926);
var G__15930 = 0;
seq__15911_15915 = G__15927;
chunk__15912_15916 = G__15928;
count__15913_15917 = G__15929;
i__15914_15918 = G__15930;
continue;
}
} else
{var n_15931 = cljs.core.first.call(null,seq__15911_15925__$1);goog.style.setStyle(n_15931,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15932 = cljs.core.next.call(null,seq__15911_15925__$1);
var G__15933 = null;
var G__15934 = 0;
var G__15935 = 0;
seq__15911_15915 = G__15932;
chunk__15912_15916 = G__15933;
count__15913_15917 = G__15934;
i__15914_15918 = G__15935;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__15936){
var content = cljs.core.first(arglist__15936);
arglist__15936 = cljs.core.next(arglist__15936);
var name = cljs.core.first(arglist__15936);
var value = cljs.core.rest(arglist__15936);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__15941_15945 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15942_15946 = null;var count__15943_15947 = 0;var i__15944_15948 = 0;while(true){
if((i__15944_15948 < count__15943_15947))
{var n_15949 = cljs.core._nth.call(null,chunk__15942_15946,i__15944_15948);n_15949.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15950 = seq__15941_15945;
var G__15951 = chunk__15942_15946;
var G__15952 = count__15943_15947;
var G__15953 = (i__15944_15948 + 1);
seq__15941_15945 = G__15950;
chunk__15942_15946 = G__15951;
count__15943_15947 = G__15952;
i__15944_15948 = G__15953;
continue;
}
} else
{var temp__4092__auto___15954 = cljs.core.seq.call(null,seq__15941_15945);if(temp__4092__auto___15954)
{var seq__15941_15955__$1 = temp__4092__auto___15954;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15941_15955__$1))
{var c__4148__auto___15956 = cljs.core.chunk_first.call(null,seq__15941_15955__$1);{
var G__15957 = cljs.core.chunk_rest.call(null,seq__15941_15955__$1);
var G__15958 = c__4148__auto___15956;
var G__15959 = cljs.core.count.call(null,c__4148__auto___15956);
var G__15960 = 0;
seq__15941_15945 = G__15957;
chunk__15942_15946 = G__15958;
count__15943_15947 = G__15959;
i__15944_15948 = G__15960;
continue;
}
} else
{var n_15961 = cljs.core.first.call(null,seq__15941_15955__$1);n_15961.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__15962 = cljs.core.next.call(null,seq__15941_15955__$1);
var G__15963 = null;
var G__15964 = 0;
var G__15965 = 0;
seq__15941_15945 = G__15962;
chunk__15942_15946 = G__15963;
count__15943_15947 = G__15964;
i__15944_15948 = G__15965;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__15966){
var content = cljs.core.first(arglist__15966);
arglist__15966 = cljs.core.next(arglist__15966);
var name = cljs.core.first(arglist__15966);
var value = cljs.core.rest(arglist__15966);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__15971_15975 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__15972_15976 = null;var count__15973_15977 = 0;var i__15974_15978 = 0;while(true){
if((i__15974_15978 < count__15973_15977))
{var n_15979 = cljs.core._nth.call(null,chunk__15972_15976,i__15974_15978);n_15979.removeAttribute(cljs.core.name.call(null,name));
{
var G__15980 = seq__15971_15975;
var G__15981 = chunk__15972_15976;
var G__15982 = count__15973_15977;
var G__15983 = (i__15974_15978 + 1);
seq__15971_15975 = G__15980;
chunk__15972_15976 = G__15981;
count__15973_15977 = G__15982;
i__15974_15978 = G__15983;
continue;
}
} else
{var temp__4092__auto___15984 = cljs.core.seq.call(null,seq__15971_15975);if(temp__4092__auto___15984)
{var seq__15971_15985__$1 = temp__4092__auto___15984;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15971_15985__$1))
{var c__4148__auto___15986 = cljs.core.chunk_first.call(null,seq__15971_15985__$1);{
var G__15987 = cljs.core.chunk_rest.call(null,seq__15971_15985__$1);
var G__15988 = c__4148__auto___15986;
var G__15989 = cljs.core.count.call(null,c__4148__auto___15986);
var G__15990 = 0;
seq__15971_15975 = G__15987;
chunk__15972_15976 = G__15988;
count__15973_15977 = G__15989;
i__15974_15978 = G__15990;
continue;
}
} else
{var n_15991 = cljs.core.first.call(null,seq__15971_15985__$1);n_15991.removeAttribute(cljs.core.name.call(null,name));
{
var G__15992 = cljs.core.next.call(null,seq__15971_15985__$1);
var G__15993 = null;
var G__15994 = 0;
var G__15995 = 0;
seq__15971_15975 = G__15992;
chunk__15972_15976 = G__15993;
count__15973_15977 = G__15994;
i__15974_15978 = G__15995;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__15997 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__15997,0,null);var v = cljs.core.nth.call(null,vec__15997,1,null);if(cljs.core.truth_((function (){var and__3394__auto__ = k;if(cljs.core.truth_(and__3394__auto__))
{return v;
} else
{return and__3394__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",1017020587))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__15998_SHARP_){var attr = attrs__$1.item(p1__15998_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__16005_16011 = cljs.core.seq.call(null,styles);var chunk__16006_16012 = null;var count__16007_16013 = 0;var i__16008_16014 = 0;while(true){
if((i__16008_16014 < count__16007_16013))
{var vec__16009_16015 = cljs.core._nth.call(null,chunk__16006_16012,i__16008_16014);var name_16016 = cljs.core.nth.call(null,vec__16009_16015,0,null);var value_16017 = cljs.core.nth.call(null,vec__16009_16015,1,null);domina.set_style_BANG_.call(null,content,name_16016,value_16017);
{
var G__16018 = seq__16005_16011;
var G__16019 = chunk__16006_16012;
var G__16020 = count__16007_16013;
var G__16021 = (i__16008_16014 + 1);
seq__16005_16011 = G__16018;
chunk__16006_16012 = G__16019;
count__16007_16013 = G__16020;
i__16008_16014 = G__16021;
continue;
}
} else
{var temp__4092__auto___16022 = cljs.core.seq.call(null,seq__16005_16011);if(temp__4092__auto___16022)
{var seq__16005_16023__$1 = temp__4092__auto___16022;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16005_16023__$1))
{var c__4148__auto___16024 = cljs.core.chunk_first.call(null,seq__16005_16023__$1);{
var G__16025 = cljs.core.chunk_rest.call(null,seq__16005_16023__$1);
var G__16026 = c__4148__auto___16024;
var G__16027 = cljs.core.count.call(null,c__4148__auto___16024);
var G__16028 = 0;
seq__16005_16011 = G__16025;
chunk__16006_16012 = G__16026;
count__16007_16013 = G__16027;
i__16008_16014 = G__16028;
continue;
}
} else
{var vec__16010_16029 = cljs.core.first.call(null,seq__16005_16023__$1);var name_16030 = cljs.core.nth.call(null,vec__16010_16029,0,null);var value_16031 = cljs.core.nth.call(null,vec__16010_16029,1,null);domina.set_style_BANG_.call(null,content,name_16030,value_16031);
{
var G__16032 = cljs.core.next.call(null,seq__16005_16023__$1);
var G__16033 = null;
var G__16034 = 0;
var G__16035 = 0;
seq__16005_16011 = G__16032;
chunk__16006_16012 = G__16033;
count__16007_16013 = G__16034;
i__16008_16014 = G__16035;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__16042_16048 = cljs.core.seq.call(null,attrs);var chunk__16043_16049 = null;var count__16044_16050 = 0;var i__16045_16051 = 0;while(true){
if((i__16045_16051 < count__16044_16050))
{var vec__16046_16052 = cljs.core._nth.call(null,chunk__16043_16049,i__16045_16051);var name_16053 = cljs.core.nth.call(null,vec__16046_16052,0,null);var value_16054 = cljs.core.nth.call(null,vec__16046_16052,1,null);domina.set_attr_BANG_.call(null,content,name_16053,value_16054);
{
var G__16055 = seq__16042_16048;
var G__16056 = chunk__16043_16049;
var G__16057 = count__16044_16050;
var G__16058 = (i__16045_16051 + 1);
seq__16042_16048 = G__16055;
chunk__16043_16049 = G__16056;
count__16044_16050 = G__16057;
i__16045_16051 = G__16058;
continue;
}
} else
{var temp__4092__auto___16059 = cljs.core.seq.call(null,seq__16042_16048);if(temp__4092__auto___16059)
{var seq__16042_16060__$1 = temp__4092__auto___16059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16042_16060__$1))
{var c__4148__auto___16061 = cljs.core.chunk_first.call(null,seq__16042_16060__$1);{
var G__16062 = cljs.core.chunk_rest.call(null,seq__16042_16060__$1);
var G__16063 = c__4148__auto___16061;
var G__16064 = cljs.core.count.call(null,c__4148__auto___16061);
var G__16065 = 0;
seq__16042_16048 = G__16062;
chunk__16043_16049 = G__16063;
count__16044_16050 = G__16064;
i__16045_16051 = G__16065;
continue;
}
} else
{var vec__16047_16066 = cljs.core.first.call(null,seq__16042_16060__$1);var name_16067 = cljs.core.nth.call(null,vec__16047_16066,0,null);var value_16068 = cljs.core.nth.call(null,vec__16047_16066,1,null);domina.set_attr_BANG_.call(null,content,name_16067,value_16068);
{
var G__16069 = cljs.core.next.call(null,seq__16042_16060__$1);
var G__16070 = null;
var G__16071 = 0;
var G__16072 = 0;
seq__16042_16048 = G__16069;
chunk__16043_16049 = G__16070;
count__16044_16050 = G__16071;
i__16045_16051 = G__16072;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__16077_16081 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16078_16082 = null;var count__16079_16083 = 0;var i__16080_16084 = 0;while(true){
if((i__16080_16084 < count__16079_16083))
{var node_16085 = cljs.core._nth.call(null,chunk__16078_16082,i__16080_16084);goog.dom.classes.add(node_16085,class$);
{
var G__16086 = seq__16077_16081;
var G__16087 = chunk__16078_16082;
var G__16088 = count__16079_16083;
var G__16089 = (i__16080_16084 + 1);
seq__16077_16081 = G__16086;
chunk__16078_16082 = G__16087;
count__16079_16083 = G__16088;
i__16080_16084 = G__16089;
continue;
}
} else
{var temp__4092__auto___16090 = cljs.core.seq.call(null,seq__16077_16081);if(temp__4092__auto___16090)
{var seq__16077_16091__$1 = temp__4092__auto___16090;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16077_16091__$1))
{var c__4148__auto___16092 = cljs.core.chunk_first.call(null,seq__16077_16091__$1);{
var G__16093 = cljs.core.chunk_rest.call(null,seq__16077_16091__$1);
var G__16094 = c__4148__auto___16092;
var G__16095 = cljs.core.count.call(null,c__4148__auto___16092);
var G__16096 = 0;
seq__16077_16081 = G__16093;
chunk__16078_16082 = G__16094;
count__16079_16083 = G__16095;
i__16080_16084 = G__16096;
continue;
}
} else
{var node_16097 = cljs.core.first.call(null,seq__16077_16091__$1);goog.dom.classes.add(node_16097,class$);
{
var G__16098 = cljs.core.next.call(null,seq__16077_16091__$1);
var G__16099 = null;
var G__16100 = 0;
var G__16101 = 0;
seq__16077_16081 = G__16098;
chunk__16078_16082 = G__16099;
count__16079_16083 = G__16100;
i__16080_16084 = G__16101;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__16106_16110 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16107_16111 = null;var count__16108_16112 = 0;var i__16109_16113 = 0;while(true){
if((i__16109_16113 < count__16108_16112))
{var node_16114 = cljs.core._nth.call(null,chunk__16107_16111,i__16109_16113);goog.dom.classes.remove(node_16114,class$);
{
var G__16115 = seq__16106_16110;
var G__16116 = chunk__16107_16111;
var G__16117 = count__16108_16112;
var G__16118 = (i__16109_16113 + 1);
seq__16106_16110 = G__16115;
chunk__16107_16111 = G__16116;
count__16108_16112 = G__16117;
i__16109_16113 = G__16118;
continue;
}
} else
{var temp__4092__auto___16119 = cljs.core.seq.call(null,seq__16106_16110);if(temp__4092__auto___16119)
{var seq__16106_16120__$1 = temp__4092__auto___16119;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16106_16120__$1))
{var c__4148__auto___16121 = cljs.core.chunk_first.call(null,seq__16106_16120__$1);{
var G__16122 = cljs.core.chunk_rest.call(null,seq__16106_16120__$1);
var G__16123 = c__4148__auto___16121;
var G__16124 = cljs.core.count.call(null,c__4148__auto___16121);
var G__16125 = 0;
seq__16106_16110 = G__16122;
chunk__16107_16111 = G__16123;
count__16108_16112 = G__16124;
i__16109_16113 = G__16125;
continue;
}
} else
{var node_16126 = cljs.core.first.call(null,seq__16106_16120__$1);goog.dom.classes.remove(node_16126,class$);
{
var G__16127 = cljs.core.next.call(null,seq__16106_16120__$1);
var G__16128 = null;
var G__16129 = 0;
var G__16130 = 0;
seq__16106_16110 = G__16127;
chunk__16107_16111 = G__16128;
count__16108_16112 = G__16129;
i__16109_16113 = G__16130;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__16135_16139 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16136_16140 = null;var count__16137_16141 = 0;var i__16138_16142 = 0;while(true){
if((i__16138_16142 < count__16137_16141))
{var node_16143 = cljs.core._nth.call(null,chunk__16136_16140,i__16138_16142);goog.dom.classes.toggle(node_16143,class$);
{
var G__16144 = seq__16135_16139;
var G__16145 = chunk__16136_16140;
var G__16146 = count__16137_16141;
var G__16147 = (i__16138_16142 + 1);
seq__16135_16139 = G__16144;
chunk__16136_16140 = G__16145;
count__16137_16141 = G__16146;
i__16138_16142 = G__16147;
continue;
}
} else
{var temp__4092__auto___16148 = cljs.core.seq.call(null,seq__16135_16139);if(temp__4092__auto___16148)
{var seq__16135_16149__$1 = temp__4092__auto___16148;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16135_16149__$1))
{var c__4148__auto___16150 = cljs.core.chunk_first.call(null,seq__16135_16149__$1);{
var G__16151 = cljs.core.chunk_rest.call(null,seq__16135_16149__$1);
var G__16152 = c__4148__auto___16150;
var G__16153 = cljs.core.count.call(null,c__4148__auto___16150);
var G__16154 = 0;
seq__16135_16139 = G__16151;
chunk__16136_16140 = G__16152;
count__16137_16141 = G__16153;
i__16138_16142 = G__16154;
continue;
}
} else
{var node_16155 = cljs.core.first.call(null,seq__16135_16149__$1);goog.dom.classes.toggle(node_16155,class$);
{
var G__16156 = cljs.core.next.call(null,seq__16135_16149__$1);
var G__16157 = null;
var G__16158 = 0;
var G__16159 = 0;
seq__16135_16139 = G__16156;
chunk__16136_16140 = G__16157;
count__16137_16141 = G__16158;
i__16138_16142 = G__16159;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_16168__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__16164_16169 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16165_16170 = null;var count__16166_16171 = 0;var i__16167_16172 = 0;while(true){
if((i__16167_16172 < count__16166_16171))
{var node_16173 = cljs.core._nth.call(null,chunk__16165_16170,i__16167_16172);goog.dom.classes.set(node_16173,classes_16168__$1);
{
var G__16174 = seq__16164_16169;
var G__16175 = chunk__16165_16170;
var G__16176 = count__16166_16171;
var G__16177 = (i__16167_16172 + 1);
seq__16164_16169 = G__16174;
chunk__16165_16170 = G__16175;
count__16166_16171 = G__16176;
i__16167_16172 = G__16177;
continue;
}
} else
{var temp__4092__auto___16178 = cljs.core.seq.call(null,seq__16164_16169);if(temp__4092__auto___16178)
{var seq__16164_16179__$1 = temp__4092__auto___16178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16164_16179__$1))
{var c__4148__auto___16180 = cljs.core.chunk_first.call(null,seq__16164_16179__$1);{
var G__16181 = cljs.core.chunk_rest.call(null,seq__16164_16179__$1);
var G__16182 = c__4148__auto___16180;
var G__16183 = cljs.core.count.call(null,c__4148__auto___16180);
var G__16184 = 0;
seq__16164_16169 = G__16181;
chunk__16165_16170 = G__16182;
count__16166_16171 = G__16183;
i__16167_16172 = G__16184;
continue;
}
} else
{var node_16185 = cljs.core.first.call(null,seq__16164_16179__$1);goog.dom.classes.set(node_16185,classes_16168__$1);
{
var G__16186 = cljs.core.next.call(null,seq__16164_16179__$1);
var G__16187 = null;
var G__16188 = 0;
var G__16189 = 0;
seq__16164_16169 = G__16186;
chunk__16165_16170 = G__16187;
count__16166_16171 = G__16188;
i__16167_16172 = G__16189;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__16194_16198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16195_16199 = null;var count__16196_16200 = 0;var i__16197_16201 = 0;while(true){
if((i__16197_16201 < count__16196_16200))
{var node_16202 = cljs.core._nth.call(null,chunk__16195_16199,i__16197_16201);goog.dom.setTextContent(node_16202,value);
{
var G__16203 = seq__16194_16198;
var G__16204 = chunk__16195_16199;
var G__16205 = count__16196_16200;
var G__16206 = (i__16197_16201 + 1);
seq__16194_16198 = G__16203;
chunk__16195_16199 = G__16204;
count__16196_16200 = G__16205;
i__16197_16201 = G__16206;
continue;
}
} else
{var temp__4092__auto___16207 = cljs.core.seq.call(null,seq__16194_16198);if(temp__4092__auto___16207)
{var seq__16194_16208__$1 = temp__4092__auto___16207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16194_16208__$1))
{var c__4148__auto___16209 = cljs.core.chunk_first.call(null,seq__16194_16208__$1);{
var G__16210 = cljs.core.chunk_rest.call(null,seq__16194_16208__$1);
var G__16211 = c__4148__auto___16209;
var G__16212 = cljs.core.count.call(null,c__4148__auto___16209);
var G__16213 = 0;
seq__16194_16198 = G__16210;
chunk__16195_16199 = G__16211;
count__16196_16200 = G__16212;
i__16197_16201 = G__16213;
continue;
}
} else
{var node_16214 = cljs.core.first.call(null,seq__16194_16208__$1);goog.dom.setTextContent(node_16214,value);
{
var G__16215 = cljs.core.next.call(null,seq__16194_16208__$1);
var G__16216 = null;
var G__16217 = 0;
var G__16218 = 0;
seq__16194_16198 = G__16215;
chunk__16195_16199 = G__16216;
count__16196_16200 = G__16217;
i__16197_16201 = G__16218;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__16223_16227 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16224_16228 = null;var count__16225_16229 = 0;var i__16226_16230 = 0;while(true){
if((i__16226_16230 < count__16225_16229))
{var node_16231 = cljs.core._nth.call(null,chunk__16224_16228,i__16226_16230);goog.dom.forms.setValue(node_16231,value);
{
var G__16232 = seq__16223_16227;
var G__16233 = chunk__16224_16228;
var G__16234 = count__16225_16229;
var G__16235 = (i__16226_16230 + 1);
seq__16223_16227 = G__16232;
chunk__16224_16228 = G__16233;
count__16225_16229 = G__16234;
i__16226_16230 = G__16235;
continue;
}
} else
{var temp__4092__auto___16236 = cljs.core.seq.call(null,seq__16223_16227);if(temp__4092__auto___16236)
{var seq__16223_16237__$1 = temp__4092__auto___16236;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16223_16237__$1))
{var c__4148__auto___16238 = cljs.core.chunk_first.call(null,seq__16223_16237__$1);{
var G__16239 = cljs.core.chunk_rest.call(null,seq__16223_16237__$1);
var G__16240 = c__4148__auto___16238;
var G__16241 = cljs.core.count.call(null,c__4148__auto___16238);
var G__16242 = 0;
seq__16223_16227 = G__16239;
chunk__16224_16228 = G__16240;
count__16225_16229 = G__16241;
i__16226_16230 = G__16242;
continue;
}
} else
{var node_16243 = cljs.core.first.call(null,seq__16223_16237__$1);goog.dom.forms.setValue(node_16243,value);
{
var G__16244 = cljs.core.next.call(null,seq__16223_16237__$1);
var G__16245 = null;
var G__16246 = 0;
var G__16247 = 0;
seq__16223_16227 = G__16244;
chunk__16224_16228 = G__16245;
count__16225_16229 = G__16246;
i__16226_16230 = G__16247;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3394__auto__ = allows_inner_html_QMARK_;if(and__3394__auto__)
{var and__3394__auto____$1 = (function (){var or__3406__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
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
{var value_16258 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__16254_16259 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__16255_16260 = null;var count__16256_16261 = 0;var i__16257_16262 = 0;while(true){
if((i__16257_16262 < count__16256_16261))
{var node_16263 = cljs.core._nth.call(null,chunk__16255_16260,i__16257_16262);node_16263.innerHTML = value_16258;
{
var G__16264 = seq__16254_16259;
var G__16265 = chunk__16255_16260;
var G__16266 = count__16256_16261;
var G__16267 = (i__16257_16262 + 1);
seq__16254_16259 = G__16264;
chunk__16255_16260 = G__16265;
count__16256_16261 = G__16266;
i__16257_16262 = G__16267;
continue;
}
} else
{var temp__4092__auto___16268 = cljs.core.seq.call(null,seq__16254_16259);if(temp__4092__auto___16268)
{var seq__16254_16269__$1 = temp__4092__auto___16268;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16254_16269__$1))
{var c__4148__auto___16270 = cljs.core.chunk_first.call(null,seq__16254_16269__$1);{
var G__16271 = cljs.core.chunk_rest.call(null,seq__16254_16269__$1);
var G__16272 = c__4148__auto___16270;
var G__16273 = cljs.core.count.call(null,c__4148__auto___16270);
var G__16274 = 0;
seq__16254_16259 = G__16271;
chunk__16255_16260 = G__16272;
count__16256_16261 = G__16273;
i__16257_16262 = G__16274;
continue;
}
} else
{var node_16275 = cljs.core.first.call(null,seq__16254_16269__$1);node_16275.innerHTML = value_16258;
{
var G__16276 = cljs.core.next.call(null,seq__16254_16269__$1);
var G__16277 = null;
var G__16278 = 0;
var G__16279 = 0;
seq__16254_16259 = G__16276;
chunk__16255_16260 = G__16277;
count__16256_16261 = G__16278;
i__16257_16262 = G__16279;
continue;
}
}
} else
{}
}
break;
}
}catch (e16253){if((e16253 instanceof Error))
{var e_16280 = e16253;domina.replace_children_BANG_.call(null,content,value_16258);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16253;
} else
{}
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3394__auto__ = bubble;if(cljs.core.truth_(and__3394__auto__))
{return (value == null);
} else
{return and__3394__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3406__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__16287_16291 = cljs.core.seq.call(null,children);var chunk__16288_16292 = null;var count__16289_16293 = 0;var i__16290_16294 = 0;while(true){
if((i__16290_16294 < count__16289_16293))
{var child_16295 = cljs.core._nth.call(null,chunk__16288_16292,i__16290_16294);frag.appendChild(child_16295);
{
var G__16296 = seq__16287_16291;
var G__16297 = chunk__16288_16292;
var G__16298 = count__16289_16293;
var G__16299 = (i__16290_16294 + 1);
seq__16287_16291 = G__16296;
chunk__16288_16292 = G__16297;
count__16289_16293 = G__16298;
i__16290_16294 = G__16299;
continue;
}
} else
{var temp__4092__auto___16300 = cljs.core.seq.call(null,seq__16287_16291);if(temp__4092__auto___16300)
{var seq__16287_16301__$1 = temp__4092__auto___16300;if(cljs.core.chunked_seq_QMARK_.call(null,seq__16287_16301__$1))
{var c__4148__auto___16302 = cljs.core.chunk_first.call(null,seq__16287_16301__$1);{
var G__16303 = cljs.core.chunk_rest.call(null,seq__16287_16301__$1);
var G__16304 = c__4148__auto___16302;
var G__16305 = cljs.core.count.call(null,c__4148__auto___16302);
var G__16306 = 0;
seq__16287_16291 = G__16303;
chunk__16288_16292 = G__16304;
count__16289_16293 = G__16305;
i__16290_16294 = G__16306;
continue;
}
} else
{var child_16307 = cljs.core.first.call(null,seq__16287_16301__$1);frag.appendChild(child_16307);
{
var G__16308 = cljs.core.next.call(null,seq__16287_16301__$1);
var G__16309 = null;
var G__16310 = 0;
var G__16311 = 0;
seq__16287_16291 = G__16308;
chunk__16288_16292 = G__16309;
count__16289_16293 = G__16310;
i__16290_16294 = G__16311;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__16281_SHARP_,p2__16282_SHARP_){return f.call(null,p1__16281_SHARP_,p2__16282_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3394__auto__ = obj;if(cljs.core.truth_(and__3394__auto__))
{var and__3394__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3394__auto____$1)
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
{if((function (){var G__16313 = list_thing;if(G__16313)
{var bit__4050__auto__ = (G__16313.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16313.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16313.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16313);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16313);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
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
{if((function (){var G__16314 = content;if(G__16314)
{var bit__4050__auto__ = (G__16314.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16314.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16314.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16314);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16314);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
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
{if((function (){var G__16315 = content;if(G__16315)
{var bit__4050__auto__ = (G__16315.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4050__auto__) || (G__16315.cljs$core$ISeqable$))
{return true;
} else
{if((!G__16315.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16315);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__16315);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
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

//# sourceMappingURL=domina.js.map